import Hero from "./components/Hero";
import CtaSection from "./components/CTA";
import Problem from "./components/Problem-Sec";
import Footer from "./components/Footer";
import Solution from "./components/Solution";
import Traction from "./components/Tractions";
function App() {
  return (
    <div>
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
