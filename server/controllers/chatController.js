
import Dream from '../models/Dream.js';

export const chatWithAI = async (req, res, next) => {
    try {
        const { messages } = req.body;
        
        if (!messages || messages.length === 0) {
            return res.status(400).json({ error: 'Messages are required' });
        }

        const rawText = messages[messages.length - 1].content.trim();
        
        // --- 1. PROMPT VALIDATION ---
        const wordCount = rawText.split(/\s+/).filter(word => word.length > 0).length;
        const hasAlphabets = /[a-zA-Z]/.test(rawText);
        const isValid = rawText.length >= 10 && wordCount >= 3 && hasAlphabets;

        if (!isValid) {
            return res.status(200).json({ 
                reply: "That's a start! Dreams are rich with detail—could you describe the setting or how you felt in a bit more depth?", 
                image: null 
            });
        }

        // --- 2. ENHANCE PROMPT FOR IMAGE GENERATION ---
        const reply = "✨ Your dream has been visualized below.";
        const enhancedPrompt = `${rawText}, highly detailed digital painting, cinematic lighting, dramatic atmosphere, ultra HD, 8K, masterpiece, vivid colors, ethereal dreamlike quality, surreal, professional concept art`;

        // --- 3. GENERATE POLLINATIONS AI IMAGE URL ---
        const encodedPrompt = encodeURIComponent(enhancedPrompt);
        const randomSeed = Math.floor(Math.random() * 1000000);
        const selectedImage = `https://image.pollinations.ai/prompt/${encodedPrompt}?seed=${randomSeed}&width=1024&height=1024&nologo=true`;

        console.log('DEBUG Backend: Generated Pollinations URL =>', selectedImage);

        // --- 4. PERSISTENCE ---
        if (req.user && req.user.id) {
            try {
                const newDream = new Dream({
                    userId: req.user.id,
                    title: rawText.length > 30 ? rawText.substring(0, 30) + "..." : rawText,
                    description: rawText,
                    imageUrl: selectedImage,
                    interpretation: reply
                });
                await newDream.save();
            } catch (err) {
                console.error("Failed to save dream to history:", err);
            }
        }

        // --- 5. RESPONSE ---
        res.status(200).json({ 
            reply, 
            image: selectedImage 
        });

    } catch (error) {
        console.error('Chat Logic Error:', error);
        res.status(500).json({ error: 'Internal server error in the dream realm' });
    }
};
