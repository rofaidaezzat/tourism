import "./App.css"


import { Routes, Route } from "react-router-dom"
import { Footer } from "./Pages/Footer"
import { Home } from "./Pages/Home"
import { Packages } from "./Pages/Packages"
import { Help } from "./Pages/Help"
import { Faq } from "./Pages/Faq"
import { VisaGuidance } from "./Pages/VisaGuidance"
import { Terms } from "./Pages/Terms"
import { Privacy } from "./Pages/Privacy"
import { NotFound } from "./Pages/NotFound"

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/packages" element={<Packages />} />
        <Route path="/help" element={<Help />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/visa" element={<VisaGuidance />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
