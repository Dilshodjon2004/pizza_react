import "./App.css";
import { Route } from "react-router-dom";
import Home from "./routes/home/Home";
import Menu from "./routes/menu/Menu";
import About from "./routes/about/About";
import Contact from "./routes/contact/Contact";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div>
      <Navbar />

      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/menu">
        <Menu />
      </Route>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
      <Footer />
    </div>
  );
}

export default App;
