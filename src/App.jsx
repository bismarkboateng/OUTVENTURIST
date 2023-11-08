import { Route, Routes } from "react-router-dom"

import { Home, New, Shop, Productdetail, Contact } from "./pages"

export default function App() {
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
