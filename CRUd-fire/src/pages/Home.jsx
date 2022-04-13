import React from "react";
import Footer from "../components/commons/Footer";
import Header from "../components/commons/Header";
import Hero from "../components/commons/Hero";
import AllProductsList from "../components/Products/AllProductsList";

function Home() {
  return (
    <>
      <div>
        <Header />
        <Hero />
        <AllProductsList />
        <Footer />
      </div>
    </>
  );
}

export default Home;
