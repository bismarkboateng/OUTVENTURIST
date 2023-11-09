import { createPortal } from "react-dom"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"


import { Button } from ".."
import { removeFromCart } from "../../features/cart/cartSlice"
import { useState } from "react"

export default function index() {
  const cartItems = useSelector((state) => state.cart.cartItems)
  const total = useSelector((state) => state.cart.total)
  const [onCheckout, setOnCheckout] = useState(false)
  const dispatch = useDispatch()

  const onCheckoutHandler = () => {
    setOnCheckout(true)
  }

  return createPortal(
    <section 
        data-aos="fade-down"
        className="fixed absolute top-[10%] right-[6%] 2xl:right-[18%] z-[200]
        w-[90%] md:w-[35%] lg:w-[30%] 2xl:w-[20%] mx-auto bg-[#f4f4f4] rounded-md 
        shadow-card-shadow">
        <p className="text-primary-color bg-white font-SG font-bold leading-6 pt-1 pb-1 pl-1
            rounded-md"> 
            Your Basket
        </p>
        <div 
            className="flex flex-col items-center justify-center
        ">
            {cartItems.length == 0 ? (
                <div className="flex flex-col items-center p-12">
                    <p className="text-base font-SG leading-6">Your cart is empty</p>
                    <Link style={{ textDecoration: "none"}} to={"/shop-all-products"}>
                        <Button
                            className="text-[12.8px] text-white bg-primary-color
                                py-1 px-3 rounded shadow-button-shadow"
                        >
                            GO SHOP
                        </Button>
                    </Link>
                </div>
            ): 
            (
            <div className="p-3 rounded bg-white w-[100%]">
                {cartItems.map(item => (
                <>
                    <div key={item.id} className="flex flex-row gap-3 
                        border-b border-gray-200 mb-3"
                    >
                        <img
                            src={item.image}
                            alt="item"
                            className="w-20"
                        />
                        <div>
                            <p className="text-xs font-SG font-bold leading-[15px] mb-1">{item.name}</p>
                            <p className="text-xs font-SG">{item.price}</p>
                            <Button
                                onClick={() => dispatch(removeFromCart(item))}
                                className="text-xs font-SG text-[#c19b7c] rounded-full
                                border border-[#c19b7c] py-0.5 px-2"    
                            >
                                Remove
                            </Button>
                            <p className="text-xs font-SG text-gray-500 mt-1">Qty: {item.quantity}</p>
                        </div>
                    </div>
                </>
                ))}
                <div className="w-[95%] mx-auto">
                    Subtotal: <strong>{total.toFixed(2)}</strong>
                    <Button
                        className="mt-3 text-xs bg-primary-color text-white
                        py-2 2xl:py-3 px-6 font-SG w-[100%] rounded 
                        shadow-button-shadow mb-3"
                        onClick={onCheckoutHandler}
                    >
                        {onCheckout ? 'COOKING...' : 'CONTINUE CHECKOUT'}
                    </Button>
                </div>
            </div>
            )}
        </div>
    </section>,
    document.getElementById("basket")
  )
}