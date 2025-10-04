// /api/crawl-multi.js — שלב בדיקה קל
export default async function handler(req, res) {
  // מותר GET לבדיקת בריאות ופשוטה מהדפדפן:
  if (req.method === 'GET') {
    const q = (req.query?.q || '').toString();
    res.status(200).json({ ok: true, hint: 'Use POST for real calls', echo: q });
    return;
  }

  // לשאר — צריך POST:
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
    return;
  }

  const { query } = req.body || {};
  res.status(200).json({
    items: [
      { site: 'genius', url: 'https://genius.com', title: 'Example', text: `Sample for query: ${query || ''}` }
    ],
    total_pages_fetched: 1,
    notices: []
  });
}
