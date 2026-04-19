
export const chatWithAI = async (req, res, next) => {
    try {
        const { messages } = req.body;

        if (!messages || messages.length === 0) {
            return res.status(400).json({ error: 'Messages are required' });
        }

        const rawText = messages[messages.length - 1].content.trim();
        const lowerText = rawText.toLowerCase();
        
        // --- 1. PROMPT VALIDATION ---
        // Minimum 10 characters, at least 3 words, and must contain alphabetic characters
        const wordCount = rawText.split(/\s+/).filter(word => word.length > 0).length;
        const hasAlphabets = /[a-zA-Z]/.test(rawText);
        const isValid = rawText.length >= 10 && wordCount >= 3 && hasAlphabets;

        let selectedImage = null;
        let reply = "I'm listening. Could you describe the dream in more detail? I need at least a sentence to visualize it.";

        if (!isValid) {
            // Return only a reply if the input is too short or gibberish
            return setTimeout(() => {
                res.status(200).json({ 
                    reply: "That's a start! Could you tell me more about the setting or what happened? Use at least a few words so I can help you visualize it.", 
                    image: null 
                });
            }, 800);
        }

        // --- 2. KEYWORD-BASED IMAGE MATCHING ---
        // If valid, we provide a more poetic reply and attempt to match an image
        reply = "That sounds like a fascinating dream. The energy of these visions often carries deep personal meaning. What else stood out to you?";

        if (lowerText.includes('whale')) {
            selectedImage = '/images/whale.jpg';
            reply = "A majestic whale surfacing from the deep. This represents a powerful connection to your inner wisdom and a massive emotional breakthrough.";
        } else if (lowerText.includes('ocean') || lowerText.includes('sea') || lowerText.includes('water') || lowerText.includes('beach')) {
            selectedImage = '/images/ocean.jpg';
            reply = "The vast deep of your subconscious is calling. Water reflects our emotional state, and a journey across the sea suggests a significant transition in your life.";
        } else if (lowerText.includes('forest') || lowerText.includes('trees') || lowerText.includes('woods') || lowerText.includes('nature') || lowerText.includes('jungle')) {
            selectedImage = '/images/forest.jpg';
            reply = "You are walking through the ancient woods of your mind. Every tree holds a memory, and the mist suggests secrets waiting to be uncovered in your waking life.";
        } else if (lowerText.includes('city') || lowerText.includes('buildings') || lowerText.includes('street') || lowerText.includes('urban') || lowerText.includes('skyscraper')) {
            selectedImage = '/images/city.jpg';
            reply = "The neon lights of your inner city reflect your high aspirations and the complex social connections you are currently navigating.";
        } else if (lowerText.includes('space') || lowerText.includes('galaxy') || lowerText.includes('aurora') || lowerText.includes('stars') || lowerText.includes('universe') || lowerText.includes('planet')) {
            selectedImage = '/images/space.jpg';
            reply = "Your consciousness is expanding into the cosmic infinite. To dream of space is to realize that you are both the dreamer and the universe itself.";
        } else if (lowerText.includes('flying') || lowerText.includes('sky') || lowerText.includes('clouds') || lowerText.includes('air') || lowerText.includes('birds')) {
            selectedImage = '/images/sky.jpg';
            reply = "Total freedom. Soaring through the golden clouds signifies your ability to rise above current challenges and gain a higher perspective.";
        } else if (lowerText.includes('fantasy') || lowerText.includes('magic') || lowerText.includes('island') || lowerText.includes('creature') || lowerText.includes('dragon')) {
            selectedImage = '/images/fantasy.jpg';
            reply = "A realm of pure imagination. This dream suggests that your creative spirit is thriving and you are ready to manifest something truly magical.";
        }

        // --- 3. PRODUCTION-LEVEL RESPONSE ---
        setTimeout(() => {
            res.status(200).json({ 
                reply, 
                image: selectedImage 
            });
        }, 1000);

    } catch (error) {
        console.error('Chat Logic Error:', error);
        res.status(500).json({ error: 'Internal server error in the dream realm' });
    }
};
