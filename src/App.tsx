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

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer newestOnTop={true} />
    </>
  );
}

export default App;
