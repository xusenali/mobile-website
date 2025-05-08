import { Outlet } from "react-router-dom"
import Header from "./components/header"
import Foter from "./components/Foter"


function App() {
 

  return (
    <>
      <Header/>
      <Outlet/>
      <Foter/>
    </>
  )
}

export default App
