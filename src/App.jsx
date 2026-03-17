import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage/Homepage.jsx";
import { Pivione } from "./Projects/Pivione/Pivione.jsx"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pivione" element={<Pivione />}/>
    </Routes>
  );
}