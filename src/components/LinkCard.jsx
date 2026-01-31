import "../styles/LinkCard.css";

const LinkCard = ({ link }) => {
  const IconComponent = link.iconComponent;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="link-card"
      style={{ "--card-color": link.color }}
    >
      <div className="link-icon">{IconComponent && <IconComponent />}</div>
      <div className="link-content">
        <h3 className="link-title">{link.title}</h3>
        <p className="link-description">{link.description}</p>
      </div>
      <div className="link-arrow">→</div>
    </a>
  );
};

export default LinkCard;
