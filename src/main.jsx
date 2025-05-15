import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import AboutSection from "./component/About.jsx";
import ServicesSection from "./component/Services.jsx";
import Contact from "./component/Contact.jsx";
import Footer from "./component/Footer";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    
  </StrictMode>
);
