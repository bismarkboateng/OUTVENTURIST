import { shop , navigate, account ,care } from '../Footerlinks'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const index = () => {
    const linkstyles='text-sm py-2 hover:text-gray-400 transition duration-500 ease-in-out cursor-pointer';
    const smalltext = 'text-sm'
    const ptag = 'font-bold text-xl'
    const social = 'text-teal-700	hover:text-teal-500 transition duration-500 ease-in-out cursor-pointer'
  return (
    <div style={{fontFamily: 'Schibsted Grotesk, sans-serif'}} className='bg-gray-200 md:p-16'>
    <div className='text-black flex flex-col gap-y-8 lg:flex-row justify-between px-2'>
    <div className='flex flex-col gap-y-8 lg:flex-row justify-around gap-x-16'>
      <div className='flex flex-col gap-y-8 md:flex-row justify-between gap-x-8'>

        {/* shop div */}
        <div>
            <p className ={ptag}>Shop</p>
            <ul>
              {shop.map((item) => (
                <li key={item.id}
                  className={linkstyles}
                >
                  {item.title}
                </li>))}
            </ul>
        </div>
        {/* navigate div */}
        <div>
        <p className ={ptag}>Navigate</p>
            <ul>
              {navigate.map((item) => (
                <li key={item.id}
                  className={linkstyles}
                >
                  {item.title}
                </li>))}
            </ul>
        </div>
        {/* account div */}
        <div>
        <p className ={ptag}>Account</p>
            <ul>
              {account.map((item) => (
                <li key={item.id}
                  className={linkstyles}
                >
                  {item.title}
                </li>))}
            </ul>
        </div>
      </div>
        {/* care div */}
        <div className='mr-28'>
        <div>
        <p className ={ptag}>Care</p>
            <ul>
              {care.map((item) => (
                <li key={item.id}
                  className={linkstyles}
                >
                  {item.title}
                </li>))}
            </ul>
        </div>
        </div>
    </div>


    {/* newsletter email div */}
    <div className=''>
      <div className='font-bold mb-4 text-xl'>Subscribe</div>
      <div className={smalltext}>Join our newsletter and get vouchers and exclusive deals straight to your inbox.</div>
      <div className="flex items-center gap-x-4 my-2 ">
      <input 
        type="email" 
        placeholder="Enter Your Email" 
        className="p-1 border border-yellow-700 rounded-md"
      />
      <button 
        type="button" 
        className="flex justify-center items-center py-2 px-6 text-xs uppercase bg-teal-700 border border-teal-700 rounded-sm text-white shadow-md"
      >
        Subscribe
      </button>
    </div>
      <div className={smalltext}>
      By subscribing you agree to with our <div className='underline'>Privacy Policy</div> and provide consent to receive updates from our company.
      </div>
    </div>
    {/* teal div */}
    </div>
    <div className="h-0.5 bg-teal-800 mt-8 px-4"></div>
    <div className='md:flex md:flex-row md:justify-between flex flex-col-reverse'>
    <div className='flex flex-col-reverse gap-y-4 py-8 md:flex-row md:gap-x-8'>
      <div>© Outventurist. All rights reserved.</div>
      <div className='underline hover:cursor-pointer'>Privacy Policy</div>
      <div className='underline hover:cursor-pointer'>Terms and Conditions</div>
      <div className='underline hover:cursor-pointer'>Powered by Webflow</div>
    </div>
    <div className='md:flex justify-center items-center gap-x-2'>
      <FacebookIcon className={social}/>
      <InstagramIcon className={social}/>
      <TwitterIcon className={social}/>
      <LinkedInIcon className={social}/>
      <YouTubeIcon className={social}/>
    </div>
    </div>
    </div>
  )
}

export default index