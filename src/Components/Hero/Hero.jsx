import "./Hero.css";

const Hero = ({ title1, title2, title3 }) => {
  return (
    <>
      <div className="rm_starter_hero">
        <h1 className="rm_starter_hero_h1">{title1}</h1>
        <h3 className="rm_starter_hero_h3">{title2}</h3>
        <p className="rm_starter_hero_p">{title3}</p>
        <button className="rm_starter_hero_button">
          Download your Free Version
        </button>
      </div>
    </>
  );
};

export default Hero;
