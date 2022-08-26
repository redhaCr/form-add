import "./HeroCard.css";

const HeroCard = (props) => {
  return (
    <header className="hero_aria slideInDown">
      <div className="container">
        <div className="singup slideInDown">
          <div className="row">{props.children}</div>
        </div>
      </div>
    </header>
  );
};
export default HeroCard;
