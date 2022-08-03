import React from "react";
import {
  Navbar,
  Home,
  About,
  Experience,
  Skills,
  Portfolio,
  Contact,
  Footer,
} from "./pages/views";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Experience />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
