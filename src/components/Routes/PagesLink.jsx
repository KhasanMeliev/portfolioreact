import { Routes, Route } from "react-router-dom";
import Home from "../pages/HomePage/Home";
import About from "../pages/AboutPage/About";
import Portfolio from "../pages/PortfolioPage/Portfolio";
import Blog from "../pages/BlogPage/Blog";
import Contact from "../pages/ContactPage/Contact";

function Router() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Router;