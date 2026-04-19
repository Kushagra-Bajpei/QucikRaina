import Groq from 'groq-sdk';

export const chatWithAI = async (req, res, next) => {
    const { messages } = req.body;

    if (!messages || messages.length === 0) {
        return res.status(400).json({ error: 'Messages are required' });
    }

    const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

    const SYSTEM_PROMPT = `You are QuickRaina, a high-fidelity AI Dream Visualization assistant.

CRITICAL INSTRUCTION:
1. Every message MUST end with exactly one line: "VISUALIZE: {Detailed Cinematic Prompt}"
2. NEVER skip the VISUALIZE line. No exceptions.
3. Keep the conversation response concise and poetic.

Output Format:
{Empathetic conversational response}

VISUALIZE: [Cinematic 4K, dream-like atmosphere, {sensory details}]`;

    try {
        const chatCompletion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: SYSTEM_PROMPT },
                ...messages.map(m => ({
                    role: m.role === 'ai' ? 'assistant' : m.role,
                    content: m.content
                }))
            ],
            model: "llama-3.3-70b-versatile",
            temperature: 0.7,
            max_tokens: 500,
        });

        let reply = chatCompletion.choices[0]?.message?.content || "The dream realm is quiet...";
        let imageUrl = null;

        // 1. Force the presence of VISUALIZE tag
        let visualizeMatch = reply.match(/VISUALIZE:\s*(.+)/i);
        
        if (!visualizeMatch) {
            // Safety mechanism: If AI forgot, we force-append a prompt based on its own reply
            const safePrompt = reply.substring(0, 50).replace(/[^\w\s]/gi, '') + " cinematic dream vision";
            reply += `\n\nVISUALIZE: ${safePrompt}`;
            visualizeMatch = reply.match(/VISUALIZE:\s*(.+)/i);
        }

        // 2. Extract and generate Image URL
        const prompt = visualizeMatch[1].trim().replace(/[\[\]]/g, '');
        imageUrl = `https://images.weserv.nl/?url=pollinations.ai/p/${encodeURIComponent(prompt)}?width=1024&height=1024&nologo=true`;
        
        // 3. Clean the text for UI
        reply = reply.replace(/VISUALIZE:\s*.+/i, '').trim();
        
        res.status(200).json({ reply, image: imageUrl });
    } catch (error) {
        console.error('Groq API Error:', error);
        res.status(500).json({ error: 'Failed to connect to the dream realm' });
    }
};
