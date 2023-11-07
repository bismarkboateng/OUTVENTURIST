import { Navbar, Herosection, ProductCards } from "../../components"

export default function index() {
  return (
    <main>
      <Navbar />
      <Herosection />

      <section className="w-[90%] 2xl:w-[65%] mt-20 mx-auto">
        <div className="flex flex-row gap-3 items-center">
          <h1 className="text-primary-color text-2xl font-SG font-bold leading-[33.6px]">
            New in
          </h1>
          <p className="text-secondary-color font-bold pt-3 font-SG">
            SEE ALL 🡢
          </p>
        </div>
        <ProductCards />
      </section>
    </main>
  )
}