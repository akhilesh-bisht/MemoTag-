import Hero from "./components/Hero";
import CtaSection from "./components/CTA";
import Problem from "./components/Problem-Sec";
import Footer from "./components/Footer";
import Solution from "./components/Solution";
import Traction from "./components/Tractions";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Hero />
      <Problem></Problem>
      <Solution />
      <Traction></Traction>
      <CtaSection />
      <Footer></Footer>
    </div>
  );
}

export default App;
