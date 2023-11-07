

import { Navbar, Banner, Select, Button, Productcontent} from "../../components"
import { ProductDetail } from "./product-data"
import { AiFillStar, AiOutlineStar } from "react-icons/ai"
import { BiSolidStarHalf } from "react-icons/bi"




export default function index() {
  const starStyle = "text-[24px]"

  const onAddToCartHandler = () => {
    console.log("button clicked")
  }

  return (
    <section>
        <Navbar />
        <div className="mt-3 shadow-button-shadow">
          <Banner />
        </div>
        <section className="w-[90%] 2xl:w-[65%] flex flex-col md:flex-row md:gap-4 
        lg:gap-7 xl:gap-12 mx-auto mt-12">
          <img
            src={ProductDetail.image}
            alt={ProductDetail.name}
            className="w-[100%] md:w-[60%] lg:w-[65%] object-cover border border-gray-200"
          />
          <section className="w-[100%] md:w-[40%] lg:w-[35%] lg:mt-8 2xl:mt-0">
            <h1 className="text-2xl 2xl:text-[32px] tracking-[-0.05rem] font-bold font-SG
              leading-[33.6px] mt-7 md:mt-0">
              {ProductDetail.name}
            </h1>
            <div className="mt-5 text-2xl 2xl:text-[32px] font-SG font-bold leading-[33.6px]">
              ${ProductDetail.price} USD
            </div>

            <div className="mt-6">
              <div className="flex flex-row gap-2">
                <AiFillStar className={`${starStyle} text-secondary-color`} />
                <AiFillStar className={`${starStyle} text-secondary-color`} />
                <AiFillStar className={`${starStyle} text-secondary-color`} />
                <BiSolidStarHalf className={`${starStyle} text-secondary-color`} />
                <AiOutlineStar className={`${starStyle} text-secondary-color`} />
              </div>

              <div className="font-SG text-sm leading-5 flex flex-row items-center">
                ({ProductDetail.stars} stars)
                <p className="w-[4px] h-[4px] bg-[#000] rounded-full mx-1"/>
                <span> 10 reviews</span>
              </div>
            </div>

            <p className="text-xs font-SG underline leading-5 mt-2">
              Add reviews to your Webflow ecommerce project
            </p>

            <p className="text-xs font-SG leading-5">
              Aaron Grieve is in no way affiliated with Supersparks team or product.
            </p>

            <Select />
            <Button
              className="mt-3 bg-primary-color text-white
              py-2 2xl:py-3 px-6 font-SG w-[100%] rounded shadow-button-shadow mb-3"
              onClick={onAddToCartHandler}
            >
              ADD TO CART
            </Button>
          </section>
        </section>
      <Productcontent />
    </section>
  )
}