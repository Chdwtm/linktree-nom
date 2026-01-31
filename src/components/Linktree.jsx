import { useState, useEffect } from "react";
import "../styles/Linktree.css";
import LinkCard from "./LinkCard";
import profileImage from "./jpg/nom.png";
import { FaDiscord, FaTiktok, FaShare } from "react-icons/fa6";

const Linktree = ({ isDarkMode }) => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const links = [
    {
      id: 1,
      title: "Discord",
      description: "Join our community",
      iconComponent: FaDiscord,
      url: "https://discord.gg/kgWr9RyZD3",
      color: "#5865F2",
    },
    {
      id: 2,
      title: "TikTok",
      description: "Follow my Tiktok",
      iconComponent: FaTiktok,
      url: "https://tiktok.com/@nomuyyy_",
      color: "#000000",
    },
    {
      id: 3,
      title: "SocialBuzz",
      description: "Support me on SocialBuzz",
      iconComponent: FaShare,
      url: "https://sociabuzz.com/nomuyyy/tribe",
      color: "#FF6B35",
    },
  ];

  const formatTime = (date) => {
    return date.toLocaleTimeString("id-ID", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
  };

  const getGreeting = () => {
    const hour = currentTime.getHours();
    if (hour >= 5 && hour < 12) return "New day unlocked ☀️";
    if (hour >= 12 && hour < 17) return "Midday mood check 🌤️";
    if (hour >= 17 && hour < 19) return "Sunset energy 🌅";
    return "Sleep? maybe later 🌙";
  };

  return (
    <div className="linktree-container">
      <div className="profile-section">
        <div className="profile-image-wrapper">
          <img src={profileImage} alt="Profile" className="profile-image" />
        </div>
        <h1 className="profile-name">NOMUY PLENGER</h1>
        <p className="profile-bio">Hello, Welcome to Nomuy Page</p>

        <div className="time-info">
          <div className="greeting">{getGreeting()}</div>
          <div className="current-time">{formatTime(currentTime)}</div>
          <div className={`theme-indicator ${isDarkMode ? "night" : "day"}`}>
            {isDarkMode ? "🌙 Good Night" : "☀️ Good Morning"}
          </div>
        </div>
      </div>

      <div className="links-section">
        <div className="links-grid">
          {links.map((link) => (
            <LinkCard key={link.id} link={link} />
          ))}
        </div>
      </div>

      <footer className="footer">
        <p></p>
      </footer>
    </div>
  );
};

export default Linktree;
