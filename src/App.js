import { createContext } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import CoctailDetails from "./Components/СoctailDetails/CoctailDetails"
import Layout from "./Components/Layout/Layout"
import About from "./Pages/About/About"
import Home from "./Pages/Home/Home"


export const AppContext = createContext()
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path='coctail-bar-app/' element={<Home />} />
            <Route path='/:id' element={<CoctailDetails />} />
            <Route path='/about' element={<About />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
