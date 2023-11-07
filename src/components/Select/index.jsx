import { useState } from "react"

import { waists } from "./option-data"


export default function index() {
  const [selectedWaist, setSelectedWaist] = useState("")
  const [quantity, setQuantity] = useState("1")

  const onSelectWaistHandler = (event) => {
    setSelectedWaist(event.target.value)   
  }

  const onInputChangeHandler = (event) => {
    setQuantity(event.target.value)
  }

  return (
    <section className="mt-7">
      <section>
        <p className="text-base font-SG leading-6">Waist</p>
        <select
          value={selectedWaist}
          onChange={onSelectWaistHandler}
          className="border border-[#c19b7c]
            outline-none py-2 pl-2 w-[100%] bg-white
            mt-2 font-SG text-base rounded"
        >
          <option>Select Waist</option>
          {waists.map((waist) => (
            <option
              value={waist.name}
              key={waist.id}
            >
              {waist.name}
            </option>
          ))}
        </select>
      </section>

      <section className="mt-3">
        <p className="text-base font-SG leading-6">Quantity</p>
        <input
          type="number"
          value={quantity}
          onChange={onInputChangeHandler}
          className="w-[20%] border border-[#c19b7c] py-1.5
          px-2 outline-none rounded font-SG leading-[25.6px]
          mt-2"
        />
      </section>
    </section>
  )
}
