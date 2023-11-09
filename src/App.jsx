import { Route, Routes } from "react-router-dom"
import { useEffect } from "react"
import AOS from 'aos'
import 'aos/dist/aos.css'

import { Home, New, Shop, Productdetail, Contact } from "./pages"

export default function App() {
  useEffect(() => {
    AOS.init();

    AOS.init({
      duration: 200,
      easing: 'ease-in',
    });
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/new-in" element={<New />} />
      <Route path="/shop-all-products" element={<Shop />} />
      <Route path="/product/:id" element={<Productdetail />} />
    </Routes>
  )
}
