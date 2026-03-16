
import { Routes, Route } from "react-router-dom";
import { Homepage } from "./Homepage/Homepage.jsx";


export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}