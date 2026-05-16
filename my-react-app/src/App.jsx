import Navbar from "./components/Header/Navbar";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Services from "./components/Services/Services";
import Team from "./components/Team/Team";
import Testimonial from "./components/Testimonial/Testimonial";
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonial/>
      <Footer />
    </div>
  );
}

export default App;