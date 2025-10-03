export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
    return;
  }

  const { query } = req.body || {};

  // DEMO response — רק כדי לוודא שיש לך כתובת עובדת
  res.status(200).json({
    items: [
      {
        site: "genius",
        url: "https://genius.com",
        title: "Example",
        text: `Sample for query: ${query || ""}`
      }
    ],
    total_pages_fetched: 1,
    notices: []
  });
}
