import { shop , navigate, account ,care } from './footerlinks'

const index = () => {
    const linkstyles='text-sm py-2 hover:text-gray-400 transition duration-500 ease-in-out cursor-pointer';
    const smalltext = 'text-sm'
    const ptag = 'font-bold text-xl'
  return (
    <div className='bg-gray-200 text-black md:flex flex-row justify-between px-2'>
    <div className='md:flex flex-row justify-around gap-x-16'>
      <div className='flex flex-row gap-x-16'>

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
        <div className=''>
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
    <div>
      <div className='font-bold mb-8'>Subsribe</div>
      <div className={smalltext}>Join our newsletter and get vouchers and exclusive deals straight to your inbox.</div>
      <div className="flex items-center gap-x-4 my-4 ">
      <input 
        type="email" 
        placeholder="Enter Your Email" 
        className="p-1 border border-gray-400 rounded-sm"
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
    </div>
  )
}

export default index