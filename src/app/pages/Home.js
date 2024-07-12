import React  from "react"
import Card from "../components/Card";
import Banner from "../components/Banner";
import Header from "../components/Header";
import bannerImage from '../assets/photo-banner-cliff.avif'
 
const Home = () => {
  
  return (
  <>
  <main>
    <Header/>
    <Banner bannerImage={bannerImage} title="Chez vous, partout et ailleurs" />
    <Card />
  </main>
  </>
  );
};

export default Home;
