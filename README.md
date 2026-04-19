# ✨ QuickRaina: AI Dream Visualization Platform

**QuickRaina** is a full-stack MERN application designed to turn your dreams into vivid visual and poetic interpretations. Using advanced keyword matching and AI-driven logic, users can explore their subconscious through a premium, interactive chat interface.

---

## 🚀 Key Features

- **AI Dream Visualization**: Input your dream descriptions and receive a matched high-quality visualization along with a poetic interpretation of your symbols.
- **Persistent Chat History**: Unlike standard chatbots, QuickRaina saves your entire conversation thread to MongoDB. You can revisit, rename, or delete past explorations anytime.
- **Advanced Authentication**: Secure JWT-based authentication system using Bearer tokens. Supports both guest exploration and persistent user sessions.
- **Dynamic Matching Engine**: A robust regex-based keyword engine that matches dream archetypes (like Horror, Spiritual, Animal, etc.) to specific high-fidelity images.
- **Modern UI/UX**:
  - Futuristic dark-themed aesthetic with glassmorphism.
  - Smooth animations powered by Framer Motion.
  - Fully responsive design with a collapsible sidebar.
  - Real-time dark/light mode toggling.

---

## 🛠️ Technology Stack

### **Frontend**
- **React (Vite)**: For a lightning-fast development experience and optimized builds.
- **Tailwind CSS**: Modern utility-first styling for a custom, premium look.
- **Framer Motion**: Smooth page transitions and micro-animations.
- **Lucide React**: Beautiful, consistent iconography.

### **Backend**
- **Node.js & Express**: Scalable server architecture.
- **MongoDB & Mongoose**: Persistent storage for user data and chat histories.
- **JSON Web Token (JWT)**: Secure, stateless authentication.
- **Dotenv**: Environment variable management for API keys and secrets.

---

## 📂 Project Structure

```bash
QuickRAINA/
├── client/          # Vite + React Frontend
│   ├── src/
│   │   ├── components/  # Reusable UI components
│   │   ├── pages/       # Page-level components (Chat, Home, Login, etc.)
│   │   ├── hooks/       # Custom hooks (Auth, Theme)
│   │   └── App.jsx      # Main application logic
│   └── public/images/   # High-fidelity dream visualization assets
└── server/          # Node.js + Express Backend
    ├── controllers/ # Business logic (Chat, Auth, History)
    ├── models/      # Mongoose schemas (User, Chat, Dream)
    ├── routes/      # API endpoints
    ├── middleware/  # JWT verification and error handling
    └── index.js     # Server entry point
```

---

## ⚙️ Setup & Installation

### **Prerequisites**
- Node.js (v18 or higher)
- MongoDB account (Atlas or local)

### **1. Clone the repository**
```bash
git clone <your-repo-url>
cd QuickRAINA
```

### **2. Backend Setup**
Navigate to the `server` folder:
```bash
cd server
npm install
```
Create a `.env` file in the `server` directory and add:
```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```
Start the backend:
```bash
npm run dev
```

### **3. Frontend Setup**
Navigate to the `client` folder:
```bash
cd ../client
npm install
```
Start the frontend:
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

---

## 🔮 Dream Categories Supported
The platform currently recognizes over 25+ dream archetypes including:
- **Spiritual**: Vishnu, Shiva, Krishna, God, Temple.
- **Horror**: Ghosts, Dark Night, Scary, Monsters.
- **Nature**: Ocean, Forest, Sky, Space, Desert.
- **Life Events**: Chases, Flying, Falling, Success, Romance.

---

## 📄 License
This project is for educational and demo purposes as part of the QuickRaina AI project.
