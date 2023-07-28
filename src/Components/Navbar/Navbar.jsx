import "./Navbar.css";
import { AiFillSignal } from "react-icons/ai";

const Navbar = ({ logo, item1, item2 }) => {
  return (
    <>
      <nav>
        <div className="rm_navbar_logo">
          <h1 className="rm_navbar_h1">
            <AiFillSignal /> {logo}
          </h1>
        </div>
        <div className="rm_navbar_links">
          <ul className="rm_navbar_links -menu">
            <li>
              <a href="/#">{item1}</a>
            </li>
            <li>
              <a href="/#">{item2}</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
