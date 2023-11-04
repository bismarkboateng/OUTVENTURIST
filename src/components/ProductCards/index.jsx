// import { images, names, prices } from "./data"
const index = () => {
  return (
    <div>
    <div>
        <div className="flex flex-col w-1/3 p-6 shadow-lg">
          <img 
            src="https://assets.website-files.com/64515ac135d5d28b9772c12b/64b01f1e984b25871696165d_JAcket%202.png"
            className="p-4 h-48 shadow-lg transition-all duration-500 transform hover:scale-105 cursor-pointer"
          />
        <div>
          <div>TerraVenture Waterproof Pro Jacket</div>
          <div>$1</div>
          <button className="bg-white text-teal-500 border-teal-500 border-2 w-full px-4 py-2 rounded">
          SEE DETAILS
          </button>
        </div>
        </div>
    </div>
    </div>
  )
}

export default index

