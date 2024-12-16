import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';

interface User {
  email: string;
  fullName: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => void;
  signup: (email: string, password: string, fullName: string) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email: string, password: string) => {
    // In a real app, you'd validate credentials with a backend
    const mockUser = {
      email,
      fullName: 'John Doe', // In real app, this would come from backend
    };
    
    setUser(mockUser);
    localStorage.setItem('user', JSON.stringify(mockUser));
    toast.success('Successfully logged in!');
    navigate('/dashboard');
  };

  const signup = (email: string, password: string, fullName: string) => {
    // In a real app, you'd create user in backend
    const newUser = {
      email,
      fullName,
    };
    
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
    toast.success('Account created successfully!');
    navigate('/dashboard');
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout, isAuthenticated: !!user }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};