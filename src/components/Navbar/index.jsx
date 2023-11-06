import { useState } from "react"
import { GrMenu } from "react-icons/gr"
import { AiOutlineClose } from "react-icons/ai"

import { Logo, Cart } from "../../assets"
import { Navlinks} from ".."



export default function index() {
  const [mobile, setMobile] = useState(false)

  const toggleMobile = () => {
    setMobile(prevMobile => !prevMobile)
  }
  return (
    <nav className="w-[90%] 2xl:w-[65%] mx-auto sticky relative top-0 mt-2 lg:mt-4 
      flex flex-row items-center bg-white">
        <div className="flex flex-row items-center gap-1 mr-auto">
          <img
            src={Logo}
            alt="ovunterist"
            className="w-10 h-10"
          />

          <div>
            <h2 className="text-base md:text-2xl font-bold tracking-[-0.03rem] font-SG leading-4
              text-primary-color">
              OUTVENTURIST
            </h2>
            <p className="text-primary-color text-[0.55rem] font-SG font-semibold
              leading-[8.8px] opacity-60 md:text-[12.8px]">
              OUTDOOR GEAR <span className="underline mt-1 md:text-[9.6px] md:mt-0">SINCE</span> 1996
            </p>
          </div>          
        </div>

        <div className="hidden mr-5 mt-1 lg:flex">
          <Navlinks
            className="flex flex-row items-center gap-8"
            liStyles = "text-lg text-primary-color font-SG leading-7"
          />
        </div>

        { mobile ? (
        <i className="mr-2 lg:hidden">
          <AiOutlineClose
            fontSize={23}
            onClick={toggleMobile}
          />
        </i>
        ) : (
        <i className="mr-2 lg:hidden">
          <GrMenu
            fontSize={23}
            onClick={toggleMobile}
          />
        </i>)}

        {mobile && (
          <div className="absolute top-[190%] left-0 bg-white w-full h-screen
            animate-slideDown">
            <Navlinks 
              liStyles = "text-lg text-primary-color font-SG leading-7 pb-5"
            />
          </div>
        )}

        <div className="flex flex-row items-center 
          px-[2px] py-[2px] bg-[#c19b7c] h-[35px] rounded">
            <img
              src={Cart}
              alt="cart icon"
              className="w-5 ml-2"
            />
            <p className="ml-2 py-[3px] px-[4px] bg-white font-semibold
            text-primary-color">0</p>
        </div>
    </nav>
  )
}