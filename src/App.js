import "./App.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Components/NavigationBar";
import Form from "./Components/TextForm";
import { useState } from "react";
import Alert from "./Components/Alert";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import About from "./Components/About";
import PageNotFound from "./Components/PageNotFound";
import Footer from "./Components/Footer";

function App() {
  const [mode, setMode] = useState("primary");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, variant) => {
    setAlert({
      msg: message,
      var: variant,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  const toggleMode = () => {
    if (mode === "primary") {
      setMode("dark");
      document.body.style.backgroundColor = "#395B64";
      showAlert("Dark mode is enabled!", "light");
    } else {
      setMode("primary");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled!", "secondary");
    }
  };
  return (
    <>
      <Router>
        <NavBar mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />

        <Routes>
          <Route
            exact
            path="/"
            element={<Form mode={mode} showAlert={showAlert} />}
          />
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route exact path="/not-found" element={<PageNotFound />} />
          <Route path="*" element={<Navigate replace to="/not-found" />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
