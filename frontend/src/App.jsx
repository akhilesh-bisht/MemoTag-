import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from "./components/Hero";
import CtaSection from "./components/CTA";
import Problem from "./components/Problem-Sec";
import Footer from "./components/Footer";
import Solution from "./components/Solution";
import Traction from "./components/Tractions";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Signup from "./pages/Sign";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          {/* Landing page route */}
          <Route
            path="/"
            element={
              <>
                <Hero />
                <Problem />
                <Solution />
                <Traction />
                <CtaSection />
              </>
            }
          />

          {/* Login and Signup routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
