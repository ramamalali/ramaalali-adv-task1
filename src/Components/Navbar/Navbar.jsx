import "./Navbar.css";
import { AiFillSignal } from "react-icons/ai";

const Navbar = ({ logo, githubLink, signinLink }) => {
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
              <a href="/#">{githubLink}</a>
            </li>
            <li>
              <a href="/#">{signinLink}</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
