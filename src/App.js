import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Components/Home";
import Deconnexion from "./Components/Deconnexion";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import "./styles/App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/deconnexion" element={<Deconnexion />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
