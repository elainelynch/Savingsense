import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import Footer from "./components/Footer";
import ExpenseCategory from "./components/ExpenseCategory";



function App() {
 
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Login/>}/>
          <Route path="/" element={
           <>
            <Register />
            <ExpenseCategory />
           </>
          }/>
        </Routes>
      </BrowserRouter>
      <Footer />

    </>
  )
}

export default App
