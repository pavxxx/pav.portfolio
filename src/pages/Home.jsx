import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import SelectedWork from "../components/SelectedWork";
import Skills from "../components/Skills";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Experience />
      <SelectedWork />
      <Footer />
    </>
  );
}

export default Home;
