import "./Header.css";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

const Header = () => {
  /* navbar's data */
  const [logo] = useState("Starter");
  const [githubLink] = useState("GitHub");
  const [signinLink] = useState("Sign In");

  /* Hero's data */
  const [title] = useState("The Modern Landing Page for");
  const [subTitle] = useState("React Developer");
  const [description] = useState("The easient way to build React Landing Page in seconds.");

  return (
    <div className="rm_starter_header">
      <Navbar logo={logo} githubLink={githubLink} signinLink={signinLink} />
      <Hero title1={title} title2={subTitle} title3={description} />
    </div>
  );
};

export default Header;
