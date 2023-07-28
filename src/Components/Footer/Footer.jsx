import Icons from "../Icons/Icons";
import "./Footer.css";
import { AiFillSignal } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaAt } from "react-icons/fa6";
import { BiRss } from "react-icons/bi";
import { FaHeart } from "react-icons/fa";

const Footer = ({ list }) => {
  return (
    <div className="rm_footer">
      <h1 className="rm_footer_h1">
        <AiFillSignal /> Starter
      </h1>
      <div className="rm_footer_ul">
        <ul className="rm_footer_ul1">
          <li>{list[0]}</li>
          <li>{list[1]}</li>
          <li>{list[2]}</li>
          <li>{list[3]}</li>
        </ul>
      </div>
      <Icons
        list={[
          <FaGithub />,
          <FaFacebook />,
          <FaTwitter />,
          <FaYoutube />,
          <FaLinkedin />,
          <FaAt />,
          <BiRss />,
        ]}
      />
      <p>
        copyright 2021 Nextjs starter , powred with <FaHeart />{" "}
        <a href="/#" className="rm_footer_rama">
          Rama Al Ali
        </a>
      </p>
    </div>
  );
};

export default Footer;
