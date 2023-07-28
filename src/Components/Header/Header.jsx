import "./Header.css";
import Hero from "../Hero/Hero";
import Navbar from "../Navbar/Navbar";
import { useState } from "react";

const Header = () => {
  /* navbar's data */
  const [logo] = useState("Starter");
  const [item1] = useState("GitHub");
  const [item2] = useState("Sign In");

  /* Hero's data */
  const [title1] = useState("The Modern Landing Page for");
  const [title2] = useState("React Developer");
  const [title3] = useState("The easient way to build React Landing Page in seconds.");

  return (
    <div className="rm_starter_header">
      <Navbar logo={logo} item1={item1} item2={item2} />
      <Hero title1={title1} title2={title2} title3={title3} />
    </div>
  );
};

export default Header;
