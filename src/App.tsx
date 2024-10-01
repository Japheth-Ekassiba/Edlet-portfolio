import About from "./Sections/About";
import Contact from "./Sections/Contact";
import Footer from "./Sections/Footer";
import Header from "./Sections/Header";
import Navbar from "./Sections/Navbar";
import Projects from "./Sections/Projects";
import Services from "./Sections/Services";
import Testimonials from "./Sections/Testimonials";
import Loader from "./Components/Loader";
import { useEffect, useState } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1800);

    // Clean Up
    return () => clearTimeout(timeout);
  }, [])
  return (
    <>
      {loading && <Loader />}
      {
        !loading && (
          <>
            <Navbar />
            <Header />
            <About />
            <Services />
            <Projects />
            <Testimonials />
            <Contact />
            <Footer />
          </>
        )
      }

    </>
  );
};

export default App;
