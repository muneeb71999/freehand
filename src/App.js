import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Blog from "./components/Blog";
import Sales from "./components/Sales";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Hero />
      <Services />
      <Blog />
      <Sales />
      <Cta />
      <Footer />
    </React.Fragment>
  );
}

export default App;
