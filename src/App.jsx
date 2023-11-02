import { Route, Routes } from "react-router-dom"

import { Home, Contact, New, Shop, Productdetail } from "./pages"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/new" element={<New />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/product-detail/:id" element={<Productdetail />} />
    </Routes>
  )
}
