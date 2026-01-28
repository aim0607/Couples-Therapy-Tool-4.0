export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { responses, userName } = req.body;

    const prompt = `You are an expert relationship therapist with deep training in Enneagram, attachment theory, communication patterns, and couples dynamics. A person named ${userName} has just completed a comprehensive relationship assessment. Generate a deeply personal, insightful 10,000-word profile that reads like it was written by someone who's known them their whole life.

ASSESSMENT RESPONSES:
${JSON.stringify(responses, null, 2)}

CRITICAL INSTRUCTIONS:
1. Write in second person ("you") - intimate, knowing, warm
2. Make connections across their responses - show how their Enneagram type influences their attachment style, how childhood patterns show up in current conflicts
3. Name what they've always felt but couldn't articulate
4. Be specific - use their exact words and examples back to them
5. Balance validation with gentle challenge - help them see their blind spots with compassion
6. Include concrete, actionable growth steps
7. Structure: 
   - Opening: Mirror back their essence in a way that makes them feel seen
   - Your Core Pattern (Enneagram): Deep dive into their type, wings, integration/disintegration
   - Your Attachment Dance: How early patterns shape current relationship
   - How You Communicate: Strengths and growing edges
   - Your Conflict Signature: The cycle and how to break it
   - Giving and Receiving Love: What you need and how you show up
   - Your Growth Edge: Specific practices for evolution
   - A Letter to Your Partner: What you need them to understand
   - Closing: Hope and possibility

Write with the depth and precision of Esther Perel, the compassion of Terry Real, and the insight of Riso-Hudson. This should feel like the most accurate thing anyone has ever written about them.

Be extensive and thorough. Aim for true 10,000 words - this is a comprehensive profile that deserves depth.`;

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 16000,
        messages: [
          { role: 'user', content: prompt }
        ],
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Anthropic API error:', error);
      return res.status(response.status).json({ error: 'Failed to generate profile' });
    }

    const data = await response.json();
    const profileText = data.content.find(c => c.type === 'text')?.text || '';

    res.status(200).json({ profile: profileText });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}
