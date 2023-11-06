import { cardData } from "./data"
const index = () => {
  return (
    <div className="grid p-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
    {cardData.map((item) => (
      <div key={item.id}>
        <div className="flex flex-col p-6 shadow-lg">
  <div className="flex justify-between z-10 top-8">
  <div className="top-4 left-4 bg-opacity-10 text-[#c19b7c] border border-[#c19b7c] rounded-lg px-2 py-1 text-xs backdrop-blur-[5px]">
      Free Delivery
    </div>
    <button className="top-4 right-4 text-red-700 border border-red-700 rounded-lg px-2 text-xs font-semibold backdrop-blur-[5px]">
      Sale
    </button>
  </div>
  <div className="z-0">
  <img 
    src={item.image}
    className="p-4 shadow-lg transition-all duration-500 transform hover:scale-105 cursor-pointer "
  />
  </div>


        <div>
          <div className="font-bold mt-4">{item.product}</div>  
          <div className="flex gap-x-4">
          <div className="line-through">{item.cancelled}</div>
          <div className="">{item.price}</div>
          </div>
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
