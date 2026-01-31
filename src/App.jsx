import { useState, useEffect } from "react";
import "./App.css";
import Linktree from "./components/Linktree";
import FloatingBubbles from "./components/FloatingBubbles";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const updateTheme = () => {
      const hour = new Date().getHours();
      // Malam: 18:00 (6 PM) - 05:59 (6 AM)
      const isNight = hour >= 18 || hour < 6;
      setIsDarkMode(isNight);
    };

    updateTheme();
    const interval = setInterval(updateTheme, 60000); // Update setiap menit

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`app ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <FloatingBubbles />
      <Linktree isDarkMode={isDarkMode} />
    </div>
  );
}

export default App;
