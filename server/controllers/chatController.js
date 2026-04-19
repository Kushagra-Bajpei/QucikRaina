
// Extended Dream categories for humanitarian and realistic dream experiences
const DREAM_CATEGORIES = [
    {
        id: 'radha-krishna',
        keywords: ["krishna", "radha", "radha krishna", "love divine", "flute", "vrindavan"],
        image: '/images/radha-krishna.jpg',
        replies: [
            "Glimpsing Radha and Krishna in your dreams represents the ultimate union of the individual soul with the divine love.",
            "The sound of the flute in Vrindavan is a call to return to your truest, most joyful state of being."
        ]
    },
    {
        id: 'shiva',
        keywords: ["shiv", "shiva", "mahadev", "bholenath", "adishakti"],
        image: '/images/shiva.jpg',
        replies: [
            "The presence of Lord Shiva represents the dance of destruction and creation—the power of transformation.",
            "Gazing upon Mahadev suggests you are seeking stillness and a deep connection to the eternal."
        ]
    },
    {
        id: 'god',
        keywords: ["vishnu", "krishna", "ram", "god", "temple", "divine", "blessing", "deity", "spiritual"],
        image: '/images/god.jpg',
        replies: [
            "Stepping into a temple or meeting the divine represents a search for ultimate truth and inner peace.",
            "A blessing in the dream realm signifies that you are protected and guided on your path."
        ]
    },
    {
        id: 'horror',
        keywords: ["ghost", "horror", "scary", "monster", "nightmare", "demon", "creepy", "spirit"],
        image: '/images/horror.jpg',
        replies: [
            "Encountering shadows in your dream is a way of integrating your fears into your strength.",
            "A scary vision is often a doorway; once you face the monster, it loses its power over you."
        ]
    },
    {
        id: 'chase',
        keywords: ["chasing", "running", "escape", "danger", "running away", "following me"],
        image: '/images/chase.jpg',
        replies: [
            "Being chased reflects something in your waking life that you are not yet ready to confront.",
            "The act of running in a dream suggests an urgency to move forward or a fear of being held back."
        ]
    },
    {
        id: 'fire',
        keywords: ["fire", "burning", "explosion", "flames", "smoke", "heat"],
        image: '/images/fire.jpg',
        replies: [
            "Fire is a powerful symbol of purification. It burns away the old to make room for the new.",
            "An explosion in the dream realm reflects intense emotions or a sudden breakthrough in your waking life."
        ]
    },
    {
        id: 'fall',
        keywords: ["falling", "fall", "height", "cliff", "drop", "stumble"],
        image: '/images/fall.jpg',
        replies: [
            "Falling represents a loss of control or a fear of failure. It is an invitation to let go and trust the path.",
            "The sensation of falling often precedes a shift in consciousness—a descent into deeper understanding."
        ]
    },
    {
        id: 'snake',
        keywords: ["snake", "cobra", "serpent", "python", "reptile"],
        image: '/images/snake.jpg',
        replies: [
            "A snake in a dream often represents transformation or hidden fears surfacing to be healed.",
            "The serpent is an ancient symbol of shedding the old and awakening to a new wisdom."
        ]
    },
    {
        id: 'lion',
        keywords: ["lion", "tiger", "wild animal", "roar", "predator"],
        image: '/images/lion.jpg',
        replies: [
            "The roar of a lion signifies your own untamed power and the courage needed to face a challenge.",
            "Meeting a wild predator in the dream realm reflects a situation in life where you must stand your ground."
        ]
    },
    {
        id: 'whale',
        keywords: ["whale"],
        image: '/images/whale.jpg',
        replies: [
            "A majestic whale represents deep wisdom and a massive emotional breakthrough surfacing from the depths.",
            "The ancient spirit of the ocean is speaking to you through this powerful vision."
        ]
    },
    {
        id: 'bird',
        keywords: ["bird", "eagle", "flying bird", "wings", "soaring", "feather"],
        image: '/images/bird.jpg',
        replies: [
            "Birds are messengers from your higher self. An eagle's flight suggests taking a wider view of your life.",
            "To see wings in your dream is to acknowledge your own desire for spiritual or creative freedom."
        ]
    },
    {
        id: 'dog',
        keywords: ["dog", "puppy", "pet", "barking", "hound"],
        image: '/images/dog.jpg',
        replies: [
            "A loyal companion in a dream reflects your own loyalty and the importance of trust in your relationships.",
            "A friendly dog represents protection and the simple joys of unconditional love."
        ]
    },
    {
        id: 'romantic',
        keywords: ["girl", "love", "date", "park", "couple", "romantic", "boyfriend", "girlfriend", "kiss", "wedding"],
        image: '/images/romantic.jpg',
        replies: [
            "Love in dreams often reflects a desire for connection or a blossoming part of your own heart.",
            "A romantic encounter in the dream realm suggests you are finding harmony with your inner self."
        ]
    },
    {
        id: 'party',
        keywords: ["party", "dance", "music", "friends", "club", "celebration", "festival", "crowd"],
        image: '/images/party.jpg',
        replies: [
            "Celebration in dreams signifies a release of energy and a sense of belonging.",
            "Dancing through your dreams means you are moving in rhythm with your true desires."
        ]
    },
    {
        id: 'travel',
        keywords: ["travel", "trip", "abroad", "foreign", "flight", "vacation", "beach", "airplane", "passport", "suitcase"],
        image: '/images/travel.jpg',
        replies: [
            "Traveling in a dream suggests a period of transition or a search for new horizons in your life.",
            "A distant shore or a flight into the unknown represents your readiness for a new chapter."
        ]
    },
    {
        id: 'luxury',
        keywords: ["rich", "money", "luxury", "car", "mansion", "success", "powerful", "diamonds", "gold", "expensive"],
        image: '/images/luxury.jpg',
        replies: [
            "Abundance in dreams often reflects recognized self-worth or an ambition to lead a larger life.",
            "Luxury represents the richness of your potential and the quality of your inner resources."
        ]
    },
    {
        id: 'adventure',
        keywords: ["mountain", "hiking", "adventure", "exploring", "desert", "climbing", "wilderness", "survival"],
        image: '/images/adventure.jpg',
        replies: [
            "Atop a mountain or deep in the wilderness, you are testing your strength and seeking a higher view.",
            "Adventure is your soul's way of telling you that you're ready to explore uncharted territories."
        ]
    },
    {
        id: 'college',
        keywords: ["college", "school", "class", "exam", "friends", "campus", "graduation", "teacher", "study"],
        image: '/images/college.jpg',
        replies: [
            "Learning environments in dreams suggest a phase of personal growth or an 'exam' you are facing in life.",
            "Walking through a campus reflects your lifelong journey of learning and the social lessons you carry."
        ]
    },
    {
        id: 'fantasy',
        keywords: ["magic", "powers", "flying", "superhero", "dragon", "wizard", "spells", "enchanted", "floating"],
        image: '/images/fantasy.jpg',
        replies: [
            "A realm of pure imagination. Magic suggests that you have untapped potential to change your reality.",
            "Your creative spirit is thriving, breaking the laws of physics to show you what is truly possible."
        ]
    },
    {
        id: 'space',
        keywords: ["space", "galaxy", "stars", "aurora", "universe", "planet", "astronomy", "cosmic"],
        image: '/images/space.jpg',
        replies: [
            "Your consciousness is reaching for the stars. To dream of space is to touch the infinite.",
            "In the cosmic silence, you realize that you are both the dreamer and the universe itself."
        ]
    },
    {
        id: 'sky',
        keywords: ["sky", "clouds", "air", "summit", "flying", "atmosphere"],
        image: '/images/sky.jpg',
        replies: [
            "Total freedom. Soaring through the clouds signifies your ability to rise above current challenges.",
            "The golden sky of your mind represents clarity and the promise of a peaceful new perspective."
        ]
    },
    {
        id: 'ocean',
        keywords: ["ocean", "sea", "water", "underwater", "swimming", "waves"],
        image: '/images/ocean.jpg',
        replies: [
            "The vast deep of your subconscious is calling. Water reflects the fluid nature of your emotions.",
            "A journey across or within the sea suggests a significant transition currently taking place in your life."
        ]
    },
    {
        id: 'forest',
        keywords: ["forest", "trees", "woods", "nature", "jungle", "leaves"],
        image: '/images/forest.jpg',
        replies: [
            "You are walking through the ancient woods of your mind. Every tree holds a memory waiting to be touched.",
            "Nature in dreams represents grounding and growth. The forest protects your emerging secrets."
        ]
    },
    {
        id: 'city',
        keywords: ["city", "buildings", "street", "urban", "neon", "skyscraper", "traffic"],
        image: '/images/city.jpg',
        replies: [
            "The neon lights and steel towers reflect your high aspirations and complex social webs.",
            "Navigating a city signifies your movement through the structured world of your career and goals."
        ]
    },
    {
        id: 'night',
        keywords: ["alone", "dark", "night", "lonely", "sad", "thinking", "quiet", "shadows", "melancholy"],
        image: '/images/night.jpg',
        replies: [
            "The quiet dark is a space for deep reflection. It is where you meet your most honest self.",
            "Being alone under the night sky represents the peace that comes when you embrace your own depths."
        ]
    }
];

import Dream from '../models/Dream.js';

export const chatWithAI = async (req, res, next) => {
    try {
        const { messages } = req.body;
        
        if (!messages || messages.length === 0) {
            return res.status(400).json({ error: 'Messages are required' });
        }

        const rawText = messages[messages.length - 1].content.trim();
        const lowerText = rawText.toLowerCase();
        
        // --- 1. PROMPT VALIDATION ---
        const wordCount = rawText.split(/\s+/).filter(word => word.length > 0).length;
        const hasAlphabets = /[a-zA-Z]/.test(rawText);
        const isValid = rawText.length >= 10 && wordCount >= 3 && hasAlphabets;

        if (!isValid) {
            return setTimeout(() => {
                res.status(200).json({ 
                    reply: "That's a start! Dreams are rich with detail—could you describe the setting or how you felt in a bit more depth?", 
                    image: null 
                });
            }, 800);
        }

        // --- 2. EXTENDED KEYWORD-BASED IMAGE MATCHING ---
        let selectedCategory = null;
        
        // Find the category with the most keyword matches (or first match)
        for (const category of DREAM_CATEGORIES) {
            const hasMatch = category.keywords.some(kw => {
                const regex = new RegExp(`\\b${kw}\\b`, 'i');
                return regex.test(lowerText);
            });
            if (hasMatch) {
                selectedCategory = category;
                break; // Use the first strong category match
            }
        }

        let reply = "That sounds like a fascinating vision. Dreams often use these symbols to help us process the complexities of our waking lives. What stood out to you most?";
        let selectedImage = null;

        if (selectedCategory) {
            selectedImage = selectedCategory.image;
            // Pick a random reply from the category's replies
            const replyOptions = selectedCategory.replies;
            reply = replyOptions[Math.floor(Math.random() * replyOptions.length)];
        }

        // --- 3. PERSISTENCE ---
        // Save to real history if an image was created
        if (selectedImage && req.user && req.user.id) {
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

        // --- 4. RESPONSE ---
        setTimeout(() => {
            res.status(200).json({ 
                reply, 
                image: selectedImage 
            });
        }, 1200);

    } catch (error) {
        console.error('Chat Logic Error:', error);
        res.status(500).json({ error: 'Internal server error in the dream realm' });
    }
};
