export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed. Use POST.' });
    return;
  }

  const { query } = req.body || {};

  // דמו זמני – בקרוב נחליף בגרסה אמיתית
  res.status(200).json({
    results: [
      { site: 'genius', query },
      { site: 'rhymezone', query },
      { site: 'shironet', query },
    ],
  });
}
