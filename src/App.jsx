import HomePage from "./component/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import AboutSection from "./component/About";
import ServicesSection from "./component/Services";
import Contact from "./component/Contact";

import Header from "./component/Header";
import AboutComponent from "./component/AboutComponent";
import ServicesComponent from "./component/ServicesComponent";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutComponent />} />
        <Route path="/services" element={<ServicesComponent />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}

export default App;
