import { Switch, Route, useLocation } from "react-router-dom";
import "./styles/main.scss";
import { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

const App = (props) => {
  const location = useLocation();
  const [load, upadateLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      upadateLoad(false);
    }, 1000);
  }, []);

  return (
    <>
      <Navbar />
      <Preloader load={load} />

      <Switch location={location} key={location.pathname}>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
      <div className={"wrapper"}>{props.children}</div>
      <Footer />
    </>
  );
};

export default App;
