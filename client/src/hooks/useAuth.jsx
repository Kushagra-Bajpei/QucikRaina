import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

const DUMMY_USERS = [
  { email: 'demo@quickraina.ai', password: 'demo123', name: 'Dream Explorer' },
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem('qr-user');
    return saved ? JSON.parse(saved) : null;
  });

  const login = (email, password) => {
    const found = DUMMY_USERS.find(u => u.email === email && u.password === password);
    if (found) {
      const userData = { email: found.email, name: found.name };
      setUser(userData);
      localStorage.setItem('qr-user', JSON.stringify(userData));
      return { ok: true };
    }
    return { ok: false, error: 'Invalid credentials' };
  };

  const signup = (name, email, password) => {
    if (!name || !email || !password) return { ok: false, error: 'All fields required' };
    if (password.length < 6) return { ok: false, error: 'Password must be at least 6 characters' };
    const userData = { email, name };
    setUser(userData);
    localStorage.setItem('qr-user', JSON.stringify(userData));
    return { ok: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('qr-user');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
