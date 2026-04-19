'use client';
import { createContext, useContext, useEffect, useState } from 'react';

const InteractionContext = createContext();

export const InteractionProvider = ({ children }) => {
  const [interactions, setInteractions] = useState([]);

  // Load from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('interactions');
    if (stored) {
      setInteractions(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('interactions', JSON.stringify(interactions));
  }, [interactions]);

  const addInteraction = (type, friend) => {
    const newInteraction = {
      id: Date.now(),
      type, // call | text | video
      friendId: friend.id,
      name: friend.name,
      time: new Date().toLocaleString(),
    };

    setInteractions((prev) => [newInteraction, ...prev]);
  };

  return (
    <InteractionContext.Provider value={{ interactions, addInteraction }}>
      {children}
    </InteractionContext.Provider>
  );
};

export const useInteraction = () => useContext(InteractionContext);