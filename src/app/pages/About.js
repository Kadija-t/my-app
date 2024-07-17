import { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import Accordion from "../components/Accordion"
import bannerImage from "../assets/photo-mountain.avif";
import data from "../data/about.json";

/*  Etapes à faire dans le ABOUT
1. Collapse => faire les different sections du collapse + sass  */

const About = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (index) => {
    if (selected === index) {
      return setSelected(null);
    }
    setSelected(index);
  };

  return (
    <>
      <main>
        <Header />
        <Banner bannerImage={bannerImage} />
        <Accordion />
      </main>
    </>
  );
};

export default About;


{/* <div className="wrapper">
<div className="accordion">
  {data.map((item, index) => (
    <div className="item" key={index}>
      <div className="title" onClick={() => toggle(index)}>
        <h2>{item.title}</h2>
        <span>{selected === index ? "^" : "+"}</span>
      </div>
      <div
        className={selected === index ? "content show" : "content"}
      >
        {item.content}
      </div>
    </div>
  ))}
</div>
</div> */}