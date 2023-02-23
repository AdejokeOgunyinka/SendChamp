import React from "react";
import AOS from "aos";

import "aos/dist/aos.css";
import "./App.css";
import { Navbar, Header, Footer } from "./components";
import { Pricing1, Pricing2, Pricing3 } from "./pages/Pricing";
import { Box } from "@chakra-ui/react";

function App() {
  const [isVisible, setVisible] = React.useState(true);

  React.useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const domRef = React.useRef<any>();

  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);

  return (
    <div className="App">
      <nav className={"nav-section"}>
        <Navbar />
      </nav>
      <header className={"header-section"}>
        <Header />
      </header>
      <main>
        <Box
          w="100%"
          data-aos="fade-up"
          ref={domRef}
          className={`aos-init ${isVisible ? "aos-animate" : ""}`}
        >
          <Pricing1 />
        </Box>
        <Box
          w="100%"
          data-aos="fade-up"
          ref={domRef}
          className={`aos-init ${isVisible ? "aos-animate" : ""}`}
        >
          <Pricing2 />
        </Box>
        <Box
          w="100%"
          data-aos="fade-up"
          ref={domRef}
          className={`aos-init ${isVisible ? "aos-animate" : ""}`}
        >
          <Pricing3 />
        </Box>
      </main>
      <footer
        className={`footer-section aos-init ${isVisible ? "aos-animate" : ""}`}
        data-aos="fade-up"
        ref={domRef}
      >
        <Footer />
      </footer>
    </div>
  );
}

export default App;
