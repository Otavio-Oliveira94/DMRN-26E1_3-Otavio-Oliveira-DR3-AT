import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [tema, setTema] = useState('light');
  const STORAGE_KEY = '@app_tema';

  useEffect(() => {
    async function load() {
      try {
        const saved = await AsyncStorage.getItem(STORAGE_KEY);
        if (saved) {
          setTema(saved);
        }
      } catch (e) {
        // ignore
      }
    }
    load();
  }, []);

  useEffect(() => {
    async function save() {
      try {
        await AsyncStorage.setItem(STORAGE_KEY, tema);
      } catch (e) {
        // ignore
      }
    }
    save();
  }, [tema]);

  function alterarTema(novoTema) {
    setTema(novoTema);
  }

  return (
    <ThemeContext.Provider value={{ tema, alterarTema }}>
      {children}
    </ThemeContext.Provider>
  );
}
