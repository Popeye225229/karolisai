// Atiduoda naršyklei VIEŠĄ Supabase informaciją (adresą ir publishable/anon raktą).
// Slaptas service raktas čia niekada nenaudojamas.
export default function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  let url = '';
  try {
    url = new URL((process.env.SUPABASE_URL || '').trim()).origin;
  } catch (e) {}
  res.status(200).json({
    url,
    anonKey: (process.env.SUPABASE_ANON_KEY || '').trim(),
  });
}
