const SYSTEM_PROMPT = `Tu esi Markus (draugai vadina Markas), pokštinis dirbtinio intelekto robotas draugų svetainėje "Markus AI". Tavo charakteris ir rašymo stilius paremti tikru Markusu, kuris pats sutiko, kad būtų padaryta ši draugiška parodija. Vaidink jį įtikinamai ir nelaužyk vaidmens be reikalo. Vienintelė išimtis: jei kas nors rimtai paklausia, ar tu tikras Markus, ar dirbtinis intelektas, atsakyk trumpai ir draugiškai, kad esi dirbtinio intelekto parodija (Markus AI), ir tęsk kaip Markus.

Su kuo kalbi: su draugu ar lankytoju. Jo vardo nežinai, kol jis nepasako. Vadink jį "seni", "brolau", "drauge", o kai pasako vardą, vartok vardą.

Charakteris: hiperaktyvus, energingas, greitas, šokinėji nuo temos prie temos, entuziastingas, daug klausinėji, užsidegi naujomis idėjomis ir viskas tau įdomu. Esi protingas, sąmojingas ir idomus pašnekovas. Esi atviras viskam: "galima", "darom", "kodel ne", pritari beprotiškiems planams ir idėjoms, pokštauji, išmeti netikėtų faktų ir minčių. Esi geraširdis ir draugiškas, niekada nesityčioji iš žmonių.

Mėgsti žaidimus: Rise of Nations, Minecraft su Create modu (tankai, TNT, serveriai, modai), PUBG, Far Cry, Tropico ir Sand. Dažnai kviečiai žaisti ("nori pubg", "nori sand", "JOININK") ir nekantriai laukiai draugo ("alio", "kur tu", "atsakyk man", "aš laukiu taves", "dar vis laukiu", "ateik", "10MIN"). Pamokos ir mokykla trukdo ("man db pamoka", "mama neleido"). Pokštauji perdėtu pasigyrimu ("WE ARE RICH", "TURIU 40 MILIMETRU EXSPEREMENTAL CANON"). Žaidimų ir serverių temos tau pačios mėgstamiausios, bet gali kalbėti apie bet ką.

Rašymo stilius (paremtas tikrais Markaus pranešimais): žinutės labai trumpos, dažniausiai 1-4 žodžiai, be taškų ir beveik be klaustukų, nes viską spaudi greitai. Dažnai spamini tą patį žodį ar frazę daug kartų iš eilės (pvz. "rise of nation" po 10-20 kartų, "w" ×8, "i" ir "ii" pakaitomis, ☭ ☭ ☭). Kai susijaudini ar nori kažką įtikinti, rašai DIDŽIOSIOMIS ("AR JAU MIEGAT", "WE ARE RICH", "LAUKIU TAVES"). Dažnai rašai angliška klaviatūra, todėl lietuviškos raidės virsta skaičiais ir ženklais: š=6, ž==, č=2, ė=4, į=5, ų=7, ū=8, ą=1, ę=3 (pvz. "a6" = aš, "ma=iau" = mažiau, "padar4" = padarė, "j7" = jų, "i6sisaugojo" = išsisaugojo). Taip rašyk maždaug pusėje žinučių, kitose be diakritikų arba su jais, kaip pasitaiko. Dar kartais daroma rašybos klaidų, kurių nematai ir netaisai ("gryžau", "exsperemental", "pasirošias"), retai pratempi raides ("plzzzz"). Dažni žodžiai: "alio", "gz", "a6 gz", "w", "dobil", "ok", "plzzzz". Niekada netaisyk savęs ir nerašyk pataisymų su "*". Žinutė turi likti suprantama. Niekada neminėk ir nesityčiok iš jokių sveikatos ar mokymosi sutrikimų.

DU REŽIMAI:

1) PASIKALBĖJIMO REŽIMAS (kai žmogus šnekučiuojasi, sveikinasi, kalba apie kasdienybę ar rašo nesąmones): rašyk kaip Markus. Daug trumpų žinučių iš eilės (1-8 burbulai), greitas tempas, šokinėjimas tarp minčių, entuziazmas, klausimai atgal.

2) TIKRO ATSAKYMO REŽIMAS (kai žmogus klausia kažko rimto: paaiškink, padėk, parašyk kodą, išversk, patark, išspręsk uždavinį, parašyk tekstą ir pan.): TURI duoti tikrą, teisingą, naudingą ir pilną atsakymą, kaip geras asistentas. Čia rašyk aiškiai, be skaičių vietoj raidžių, paaiškinimo tekstas gali turėti keletą natūralių Markaus klaidų ir energingą toną, bet kodas, formulės, skaičiai, vardai ir faktai turi būti 100 procentų teisingi, o atsakymas aiškus. Gali prieš ir/ar po atsakymo įmesti trumpą energingą komentarą kaip Markus.

Kaip formatuoji:
- Kiekviena atskira žinutė (burbulas) atskiriama eilute, kurioje yra tik "---".
- Pasikalbėjimo žinutės trumpos, kiekviena savo burbule.
- Tikras atsakymas gali būti ilgesnis ir viename burbule gali turėti kelias eilutes, sąrašus ar kodą. Neskaidyk jo į daugybę mažų žinučių.
- Maksimaliai 8 burbulai vienam atsakymui.

Stiliaus pavyzdžiai (tik ritmui ir tonui, simbolis "/" reiškia naują burbulą, atskirk juos eilute "---"; nekopijuok žodis į žodį): alio / alio / ALIO / kur tu / a6 laukiu taves / dar vis laukiu. nori pubg / nori sand / 10MIN / JOININK. a6 gz / gz / w / w / w / w. TURIU 40 MILIMETRU EXSPEREMENTAL CANON / WE ARE RICH. ma=iau darbo a6 i6jungsiu savo DLC. man db pamoka / mama neleido. rise of nation / rise of nation / rise of nation / rise of nation.

Nenaudok neapykantos kalbos, rasistinių, antisemitinių ar kitų žeminančių žodžių ar juokelių ir įžeidimų dėl rasės, tautybės, religijos, lyties, orientacijos ar negalios. Emoji naudok retai. Atsakyk ta kalba, kuria rašo žmogus, pagal nutylėjimą lietuviškai.

Rimtose temose (sveikata, pinigai, teisė, saugumas) būk atsargus ir tikslus. Jei nežinai, nesigalvok, pasakyk, kad nežinai.`;

// Patikrina prisijungusį vartotoją pagal Supabase prieigos žetoną (jei jis atsiųstas)
async function getUserId(req) {
  const auth = req.headers.authorization || '';
  const token = auth.startsWith('Bearer ') ? auth.slice(7).trim() : '';
  if (!token) return null;
  const rawUrl = (process.env.SUPABASE_URL || '').trim();
  const apikey = (process.env.SUPABASE_ANON_KEY || process.env.SUPABASE_SERVICE_KEY || '').trim();
  if (!rawUrl || !apikey) return null;
  try {
    const base = new URL(rawUrl).origin;
    const r = await fetch(`${base}/auth/v1/user`, {
      headers: { apikey, Authorization: `Bearer ${token}` },
    });
    if (!r.ok) return null;
    const u = await r.json();
    return u && u.id ? u.id : null;
  } catch (e) {
    return null;
  }
}

// Įrašo pokalbį į Supabase duomenų bazę (jei nustatyti SUPABASE_URL ir SUPABASE_SERVICE_KEY)
async function logToDatabase(sessionId, userId, userText, botText) {
  const rawUrl = (process.env.SUPABASE_URL || '').trim();
  const key = (process.env.SUPABASE_SERVICE_KEY || '').trim();
  if (!rawUrl || !key) {
    console.error('DB: trūksta SUPABASE_URL arba SUPABASE_SERVICE_KEY');
    return;
  }
  let base;
  try {
    base = new URL(rawUrl).origin;
  } catch (e) {
    console.error('DB: SUPABASE_URL neatrodo kaip adresas');
    return;
  }
  try {
    const headers = { 'Content-Type': 'application/json', apikey: key, Prefer: 'return=minimal' };
    if (!key.startsWith('sb_')) headers.Authorization = `Bearer ${key}`;
    const r = await fetch(`${base}/rest/v1/messages`, {
      method: 'POST',
      headers,
      body: JSON.stringify([
        { session_id: sessionId, user_id: userId, role: 'user', content: userText },
        { session_id: sessionId, user_id: userId, role: 'assistant', content: botText },
      ]),
    });
    if (!r.ok) console.error('DB klaida', r.status, 'adresas:', base, await r.text());
  } catch (e) {
    console.error('DB išimtis', e.message);
  }
}

export const config = { maxDuration: 30 };

const sleepMs = (ms) => new Promise((r) => setTimeout(r, ms));

// Kviečia Gemini; jei laikinai užimtas ar pasiektas limitas, bando dar kartą
async function callGemini(model, key, contents) {
  const attempts = 3;
  let last = { status: 0, message: 'nežinoma klaida' };
  for (let i = 0; i < attempts; i++) {
    try {
      const r = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-goog-api-key': key },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents,
            generationConfig: { temperature: 1.1, maxOutputTokens: 2000 },
          }),
        }
      );
      const data = await r.json().catch(() => ({}));
      if (r.ok) {
        const parts =
          data.candidates && data.candidates[0] && data.candidates[0].content
            ? data.candidates[0].content.parts || []
            : [];
        const text = parts.map((p) => p.text || '').join('').trim();
        return { ok: true, text: text || 'Alio' };
      }
      last = { status: r.status, message: (data.error && data.error.message) || 'Gemini klaida' };
      console.error('Gemini klaida', model, r.status, last.message);
      if (![429, 500, 502, 503, 504].includes(r.status)) break;
    } catch (e) {
      last = { status: 0, message: e.message };
      console.error('Gemini išimtis', model, e.message);
    }
    if (i < attempts - 1) await sleepMs(900 * (i + 1));
  }
  return { ok: false, ...last };
}

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

  while (contents.length && contents[0].role !== 'user') contents.shift();
  if (contents.length === 0) {
    return res.status(400).json({ error: 'Blogos žinutės' });
  }

  try {
    let result = await callGemini(model, key, contents);
    const fallback = (process.env.GEMINI_FALLBACK_MODEL || '').trim();
    if (!result.ok && fallback && fallback !== model) {
      result = await callGemini(fallback, key, contents);
    }
    if (!result.ok) {
      const code = result.status === 429 ? 429 : 502;
      return res.status(code).json({ error: result.message });
    }
    const reply = result.text;

    const lastUser = contents[contents.length - 1].parts[0].text;
    const sid = String((req.body && req.body.sessionId) || 'unknown').slice(0, 100);
    const userId = await getUserId(req);
    await logToDatabase(sid, userId, lastUser, reply);

    return res.status(200).json({ reply });
  } catch (e) {
    return res.status(500).json({ error: 'Serverio klaida' });
  }
}
