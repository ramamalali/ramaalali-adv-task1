import "./Trial.css";

const Trial = ({ para1, para2, button }) => {
  return (
    <div className="rm_trial">
      <div className="rm_trial_text">
        <p>{para1}</p>
        <p className="rm_trial_p">{para2}</p>
      </div>
      <button className="rm_trial_buttom">{button}</button>
    </div>
  );
};

export default Trial;
