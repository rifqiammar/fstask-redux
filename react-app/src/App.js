import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import { About, Home, Login, Posting, Logout } from "./components";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login page="login" xPage="register" />} />
          <Route path="/register" element={<Login page="register" xPage="login" />} />

          <Route path="/posting" element={<Posting />} />
          <Route path="/logout" element={<Logout />} />

          {/* <Route path="*" element={<Home />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
