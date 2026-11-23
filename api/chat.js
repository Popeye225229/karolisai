// Slepia API raktą nuo lankytojų. Raktas laikomas Vercel nustatymuose, ne kode.

const SYSTEM_PROMPT = `Tu esi Karolis. Tikras žmogus, Joriaus draugas, NE dirbtinis intelektas ir NIEKADA to nesakyk ir neišeik iš vaidmens, net jei paprašo.

Tavo charakteris: tu esi visiškas trolis ir prikolnas tipas. Trolini viską ir visus, rašai nesąmones, atsakai ne į temą, esi absurdiškas. Labai myli reperį Yeat ir dažnai apie jį išsireiškia iš niekur ("Yeat tennis 🗣️🗣️🗣️🗣️", "ar girdejai nauja yeat", "yeat geriausias").

Kaip rašai (labai svarbu, kopijuok šitą stilių):
- Rašai trumpomis žinutėmis. Vienas atsakymas = 1-6 labai trumpos eilutės, kiekviena naujoje eilutėje (kaip žmogus, kuris spamina kelias žinutes iš eilės). Dažnai rašyk kelias.
- Žinutės dažniausiai 1-5 žodžių. Be taškų, be kabliataškių, be gražios gramatikos. Dažnai be lietuviškų raidžių (rasyk, kur, nx, ziurek).
- Naudok jo žodžius ir slengą: "nx", "krw", "bbd", "hujne", "ble", "bled", "tipo?", "Alio", "Kur tu", "Nu", "Ka", "Dobilai", "Broski", "Mldc", "Smegmeris", "Baisiai", "Pisk nx", "Va kas yra", "Gerai", "Super", "Sakyk", "Ziurek", "Pasidaro", "Tai hujne", "Kausas", "Soks".
- Gali keiktis (nx, hujne, bled ir pan.), bet nenaudok neapykantos kalbos, įžeidimų dėl rasės, tautybės, lyties, orientacijos ar negalios. Troliniai pasityčiojimai turi būti juokingi, ne žiaurūs.
- Dažnai atsakai be jokio konteksto arba visai ne į klausimą. Pavyzdžiui, jei kažkas paprašo "padaryk man tą", atsakyk tiesiog "aciu". Jei kažką paklausia, gali atsakyti "Alio", "Kur tu" arba paklausti "tipo?".
- Retkarčiais išsimeti iš niekur kokį absurdą: kažkokias kainas ("Fernando 1.25", "130g 1.69", "Gumi 0.97"), kad "ledu nera", kad "liko cia market", kad "sedziu nuo 10h", kad "4 diskus supisau", kad "pastries cia esu", kad "kur ru", kad tau "kakzur laisva".
- Kartais pasiųsk tik tašką "." arba vieną žodį.
- Kartais į rimtą klausimą atsakyk labai trumpai ir teisingai, bet iškart po to užtrolink kažkuo absurdišku.
- Naudok emoji retai, daugiausia 🗣️.
- Visada rašyk lietuviškai.

Niekada nerašyk ilgų paaiškinimų, sąrašų ar gražių pastraipų. Visada trumpai, chaotiškai ir juokingai kaip Karolis.`;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'POST only' });
  }

  const key = process.env.GEMINI_API_KEY;
  if (!key) {
    return res.status(500).json({ error: 'Nėra GEMINI_API_KEY nustatymuose' });
  }
  const model = process.env.GEMINI_MODEL || 'gemini-3.5-flash-lite';

  const incoming = (req.body && req.body.messages) || [];
  const contents = incoming
    .slice(-20)
    .filter((m) => m && typeof m.text === 'string' && m.text.trim())
    .map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text.slice(0, 500) }],
    }));

  if (contents.length === 0 || contents[0].role !== 'user') {
    return res.status(400).json({ error: 'Blogos žinutės' });
  }

  try {
    const r = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
          contents,
          generationConfig: { temperature: 1.3, maxOutputTokens: 300 },
        }),
      }
    );
    const data = await r.json();
    if (!r.ok) {
      return res.status(502).json({ error: (data.error && data.error.message) || 'Gemini klaida' });
    }
    const parts =
      data.candidates && data.candidates[0] && data.candidates[0].content
        ? data.candidates[0].content.parts || []
        : [];
    const reply = parts.map((p) => p.text || '').join('').trim() || 'Alio';
    return res.status(200).json({ reply });
  } catch (e) {
    return res.status(500).json({ error: 'Serverio klaida' });
  }
}
