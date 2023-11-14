import { Navbar, Footer,Banner } from '../../components'
const index = () => {
  return (
    <div>
     <Navbar/>
     <Banner/>
     <div className='flex flex-col gap-y-8 md:flex-row justify-around p-8'>
      <div className='font-bold text-5xl'>Privacy Policy</div>
      <div className='text-xl'>
      <div className='mb-12'>
        <p>Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies</p>
        <p>ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed.</p>
        <p>Nisl at scelerisque amet nulla purus habitasse.</p>
      </div>
      <div className='mb-12'>
        <p>Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In</p>
        <p>tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis</p>
        <p>lobortis at sit dictum eget nibh tortor commodo cursus.</p>
      </div>
      <div className='mb-12'>
        <p>Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi</p>
        <p>aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget</p>
        <p>consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor.</p>
        <p>Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.  </p>
      </div>
      </div>
     </div>
     <Footer/>
    </div>
  )
}

export default index