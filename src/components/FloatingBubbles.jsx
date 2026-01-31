import "../styles/FloatingBubbles.css";
import nom2 from "./jpg/nom2.png";
import nom3 from "./jpg/nom3.png";
import nom4 from "./jpg/nom4.png";
import nom5 from "./jpg/nom5.png";

const FloatingBubbles = () => {
  const bubbles = [
    {
      id: 1,
      image: nom2,
      size: "80px",
      delay: "0s",
      duration: "6s",
      left: "5%",
      top: "10%",
      type: "up",
    },
    {
      id: 2,
      image: nom3,
      size: "100px",
      delay: "1s",
      duration: "8s",
      left: "85%",
      top: "20%",
      type: "down",
    },
    {
      id: 3,
      image: nom4,
      size: "70px",
      delay: "2s",
      duration: "7s",
      left: "10%",
      top: "70%",
      type: "up",
    },
    {
      id: 4,
      image: nom5,
      size: "90px",
      delay: "0.5s",
      duration: "9s",
      left: "80%",
      top: "60%",
      type: "down",
    },
  ];

  return (
    <div className="floating-bubbles-container">
      {bubbles.map((bubble) => (
        <div
          key={bubble.id}
          className={`floating-bubble floating-${bubble.type}`}
          style={{
            "--bubble-size": bubble.size,
            "--bubble-delay": bubble.delay,
            "--bubble-duration": bubble.duration,
            left: bubble.left,
            top: bubble.top,
          }}
        >
          <img
            src={bubble.image}
            alt={`Bubble ${bubble.id}`}
            className="bubble-image"
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingBubbles;
