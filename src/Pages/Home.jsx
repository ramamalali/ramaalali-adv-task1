import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import ParentContainer from "../Components/parentContainer/ParentContainer";
import Trial from "../Components/Trial/Trial";
import { useState } from "react";

const Home = () => {
  const [para1] = useState(
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit."
  );
  const [para2] = useState("Start Your Free Trial");
  const [button] = useState("Get Started");

  return (
    <>
      <Header />
      <ParentContainer />
      <Trial para1={para1} para2={para2} button={button} />
      <Footer list={["Home", "About", "Docs", "GitHub"]} />
    </>
  );
};

export default Home;
