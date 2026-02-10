import { Homepage } from "./Homepage/Homepage.jsx"
import { Refracted } from "./Refracted/Refracted.jsx"
import { Routes, Route } from 'react-router-dom';


export default function App(){
  return(
    <>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/refracted" element={<Refracted/>}/>
      </Routes>
    </>
  )
}