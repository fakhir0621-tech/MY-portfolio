import useTheme from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  const [theme, toggleTheme] = useTheme();
  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
