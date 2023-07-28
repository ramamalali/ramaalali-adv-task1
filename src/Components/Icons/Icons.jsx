import "./Icons.css";

const Icons = ({ list }) => {
  return (
    <div className="rm_footer_icons">
      <ul className="rm_footer_icons_ul">
        <li>{list[0]}</li>
        <li>{list[1]}</li>
        <li>{list[2]}</li>
        <li>{list[3]}</li>
        <li>{list[4]}</li>
        <li>{list[5]}</li>
        <li>{list[6]}</li>
      </ul>
    </div>
  );
};

export default Icons;
