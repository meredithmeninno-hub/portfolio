import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Homepage } from "./Homepage/Homepage.jsx";
import { Pivione } from "./Projects/Pivione/Pivione.jsx"
import { Refracted } from "./Projects/Refracted/Refracted.jsx"
import { Fads } from "./Projects/Fads/Fads.jsx"

export default function App() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pivione" element={<Pivione />}/>
      <Route path="/refracted" element={<Refracted/>}/>
      <Route path="/fads" element={<Fads/>}/>
    </Routes>
  );
}