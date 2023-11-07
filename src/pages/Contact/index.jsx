import {BsEnvelope, BsFacebook, BsGeo, BsInstagram, BsLinkedin, BsTelephone, BsTwitter, BsYoutube} from 'react-icons/bs'
import { Banner, ContactForm, Footer, Navbar } from '../../components';
export default function index() {
	return (
		<>
			<Navbar />
			<Banner />
			<section className="flex flex-col lg:flex-row px-5 py-20 gap-y-16 gap-x-10 lg:px-16">
				<div className="flex flex-col gap-y-10 lg:w-1/2">
					<div className="flex flex-col gap-y-10">
						<h1 className="text-4xl font-bold text-[#3c6469]">
							Contact Us
						</h1>
						<p className="text-[1rem]">
							Get in touch, we respond to all emails within 48 hours.
						</p>
					</div>
					<div className="flex flex-col gap-y-2">
						<p className='flex flex-row gap-x-2 items-center'><BsEnvelope className="h-4 w-5 text-bold text-[#3c6469]" />contact@outventurist.com</p>
						<p className='flex flex-row gap-x-2 items-center'><BsTelephone className="h-4 w-5 text-bold text-[#3c6469]" />+1 (555) 123-4567</p>
						<p className='flex flex-row gap-x-2 items-center'><BsGeo className="h-4 w-5 text-bold text-[#3c6469]" />69 Queensway, London, N15 6VG</p>
					</div>
					<div className="flex flex-col gap-y-5">
						<p>
							Or find us on social media
						</p>
						<div className="flex flex-row gap-x-5">
							<BsFacebook className='w-5 h-5 text-[#3c6469]' />
							<BsInstagram className='w-5 h-5 text-[#3c6469]' />
							<BsTwitter className='w-5 h-5 text-[#3c6469]' />
							<BsLinkedin className='w-5 h-5 text-[#3c6469]' />
							<BsYoutube className='w-5 h-5 text-[#3c6469]' />
						</div>
					</div>
				</div>
				<div className="flex w-full lg:w-1/2">
					<ContactForm />
				</div>
			</section>
			<Footer />
		</>
	)
}
