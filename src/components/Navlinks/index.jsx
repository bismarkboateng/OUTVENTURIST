import { Link } from "react-router-dom"


export default function index(props) {
  return (
    <ul className={props.className}>
        <Link style={{ textDecoration: "none" }} to={"/new-in"}>
          <li className={props.liStyles}>New in</li>
        </Link>

        <Link style={{ textDecoration: "none" }} to={"/shop-all-products"}>
          <li className={props.liStyles}>Shop</li>
        </Link>

        <Link style={{ textDecoration: "none" }}>
          <li className={props.liStyles}>Activity</li>
        </Link>
        <div 
          className="border border-gray-100 mb-6" 
        />
        <Link style={{ textDecoration: "none" }} to={"/contact-us"}>
          <li className="text-sm text-primary-color font-bold font-SG
            leading-[19.2px]">
            CONTACT
          </li>
        </Link>
    </ul>
  )
}
