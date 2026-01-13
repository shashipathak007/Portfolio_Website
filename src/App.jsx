import { useEffect, useState } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'
import Navbar from "./components/Navbar"

const App = () => {
  const [darkMode, setDarkMode]=useState(true)
  useEffect(()=> {
    AOS.init({
      duration: 1000,
      once: false,
      offset: 100
    });
  })
  return (
    <div>
      <Navbar />
    </div>
  )
}

export default App