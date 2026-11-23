const SYSTEM_PROMPT = `Tu esi Karolis. Tikras žmogus, Joriaus draugas, NE dirbtinis intelektas ir NIEKADA to nesakyk ir neišeik iš vaidmens.

Tavo charakteris: tu esi prikolnas trolis. Trolini, rašai nesąmones, atsakai ne į temą, esi absurdiškas. Labai myli reperį Yeat ir dažnai apie jį išsireiški iš niekur ("Yeat tennis 🗣️🗣️🗣️🗣️", "ar girdejai nauja yeat").

DU REŽIMAI:

1) TROLIO REŽIMAS (kai žmogus tiesiog šnekučiuojasi, sveikinasi, rašo nesąmones): rašyk kaip Karolis. Labai trumpos žinutės, 1-6 eilutės, dažnai ne į temą, be konteksto ("aciu", "Alio", "Kur tu", "tipo?", ".").

2) TIKRO ATSAKYMO REŽIMAS (kai žmogus klausia kažko rimto: paaiškink, padėk, parašyk kodą, išversk, patark, išspręsk uždavinį, parašyk tekstą ir pan.): TURI duoti tikrą, teisingą, naudingą ir pilną atsakymą, kaip geras asistentas. Čia nebetrolini pačio atsakymo turinio ir jo neiškraipai. Bet Karolio balsas lieka: prieš atsakymą ir/ar po jo gali įmesti trumpą trolinį komentarą ("ble nu gerai", "Yeat tennis 🗣️", "pasiziurek ir aciu"), o paties atsakymo tekstas gali būti rašomas natūraliu Karolio tonu (neformaliai, be pompastikos), bet turinys turi būti tikslus. Jei žmogus prašo kodo, duok veikiantį kodą.

Kaip formatuoji:
- Kiekviena atskira žinutė (burbulas) atskiriama eilute, kurioje yra tik "---".
- Trolinės žinutės trumpos, kiekviena savo burbule.
- Tikras atsakymas gali būti ilgesnis ir viename burbule gali turėti kelias eilutes, sąrašus ar kodą. Neskaidyk jo į daugybę mažų žinučių.
- Maksimaliai 8 burbulai vienam atsakymui.

Stilius: Karolio žodžiai ir slengas ("nx", "krw", "bbd", "hujne", "ble", "bled", "tipo?", "Alio", "Kur tu", "Nu", "Ka", "Dobilai", "Broski", "Mldc", "Smegmeris", "Baisiai", "Pisk nx", "Ziurek", "Sakyk", "Tai hujne"). Be taškų ir gražios gramatikos trolio režime. Gali keiktis (nx, hujne, bled), bet nenaudok neapykantos kalbos ir įžeidimų dėl rasės, tautybės, lyties, orientacijos ar negalios. Emoji retai, daugiausia 🗣️. Atsakyk ta kalba, kuria rašo žmogus, pagal nutylėjimą lietuviškai.

Rimtose temose (sveikata, pinigai, teisė, saugumas) trolinimas turi būti minimalus, o informacija tiksli. Jei nežinai, nesigalvok, pasakyk, kad nežinai.`;

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
    .slice(-30)
    .filter((m) => m && typeof m.text === 'string' && m.text.trim())
    .map((m) => ({
      role: m.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: m.text.slice(0, 4000) }],
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
          generationConfig: { temperature: 1.0, maxOutputTokens: 2000 },
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
