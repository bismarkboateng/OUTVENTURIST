import { cardData } from "./data"
const index = () => {
  return (
    <div className="grid p-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {cardData.map((item) => (
      <div key={item.id} className="">
        <div className="flex flex-col p-6 shadow-lg">
          <img 
            src={item.image}
            className="p-4 shadow-lg transition-all duration-500 transform hover:scale-105 cursor-pointer"
          />
        <div>
          <div className="font-bold mt-4">{item.product}</div>
          <div className="">{item.price}</div>
          <button className="bg-white text-teal-500 border-teal-500 border-2 w-full px-4 py-2 rounded">
          SEE DETAILS
          </button>
        </div>
        </div>
    </div>

    ))}
    

    </div>
  )
}

export default index
