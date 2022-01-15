import "./App.css";
import Header from "../src/Component/Header";
import Footer from "../src/Component/Footer";
import Contact from "../src/Component/Contact";
import Navbar from "../src/Component/Navebar";
import About from "../src/Component/About";
import Home from "../src/Component/Home";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
