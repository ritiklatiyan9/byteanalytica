import { Routes, Route } from "react-router-dom";
import Header from "./Pages/Header/Header";
import Footer from "./Pages/Footer/Footer";
import Home from "./pages/home/Home";
import './fonts.css'


export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
       
      </Routes>

      <Footer />
    </>
  );
}
