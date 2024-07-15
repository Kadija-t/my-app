import { useState } from "react";
import Header from "../components/Header";
import Banner from "../components/Banner";
import bannerImage from "../assets/photo-mountain.avif";
import "../../sass/main.scss";

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
        <div className="wrapper">
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
        </div>
      </main>
    </>
  );
};

const data = [
  {
    title: "Fiabilité",
    content:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
  },
  {
    title: "Respect",
    content:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
  },
  {
    title: "Service",
    content:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    title: "Sécurité",
    content:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
];

export default About;
