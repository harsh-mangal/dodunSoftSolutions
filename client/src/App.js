import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import GraphicDesign from "./pages/GraphicDesign";
import Digitalmarketing from "./pages/Digitalmarketing";
import Webdevelopment from "./pages/Webdevelopment";
import WindowsDevelopment from "./pages/WindowsDevelopment";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graphicDesign" element={<GraphicDesign />} />
        <Route path="/digitalMarketing" element={<Digitalmarketing />} />
        <Route path="/WebDevelopment" element={<Webdevelopment />} />
        <Route path="/WindowsDevelopment" element={<WindowsDevelopment />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
