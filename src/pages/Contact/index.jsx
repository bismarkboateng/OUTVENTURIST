import { useState } from 'react'
import {BsEnvelope, BsFacebook, BsGeo, BsInstagram, BsLinkedin, BsTelephone, BsTwitter, BsYoutube} from 'react-icons/bs'
export default function index() {
	
	

	function AgreeButton(){
		const [agree,setAgree] = useState(false);
		const handleAgree = () => {
			if(agree == false){
				setAgree(true)
			}
			else{
				setAgree(false)
			}
		}
		return (
			<>
				<label htmlFor="" className="text-[1rem] flex flex-row gap-x-2 items-center">
					<div className={`w-10 rounded-full border p-1 border-[#c19b7c] transition-all ease-in duration-[300ms] flex ${agree ? 'justify-end bg-[#3c6469]' : 'bg-white justify-start'}`} onClick={handleAgree}>
						<div className={`rounded-full p-1 w-3 h-3 bg-[#c19b7c]`}></div>
					</div>
					<span className="text-[1rem]">I accept the <span className="underline">Terms</span></span>
				</label>
			</>
		)
	}

	function RadioButton(){
		const [radio,setRadio] = useState('radio1');
		const handleRadioChange = (e) => {
			setRadio(e.target.value)
		}
		return (
			<>
				<div className="flex flex-row flex-wrap gap-y-5">
					<label htmlFor="radio1" className='w-1/2 flex flex-row items-center gap-x-2 justify-start relative'>
						<div className={`rounded-full w-5 h-5 border border-[#c19b7c] bg-clip-content p-1 ${radio === 'radio1' ? 'bg-[#c19b7c] border-[#3c6469]' : ''}`}></div>
						<input className='absolute opacity-0' type="radio" value="radio1" id="radio1" onChange={handleRadioChange} checked={radio === 'radio1'} />
						<span className="text-[1rem]">Customer</span>
					</label>
					<label htmlFor="radio2" className='w-1/2 flex flex-row items-center gap-x-2 justify-start relative'>
						<div className={`rounded-full w-5 h-5 border border-[#c19b7c] bg-clip-content p-1 ${radio === 'radio2' ? 'bg-[#c19b7c] border-[#3c6469]' : ''}`}></div>
						<input className='absolute opacity-0' type="radio" value="radio2" id="radio2" onChange={handleRadioChange} checked={radio === 'radio2'} />
						<span className="text-[1rem]">Press</span>
					</label>
					<label htmlFor="radio3" className='w-1/2 flex flex-row items-center gap-x-2 justify-start relative'>
						<div className={`rounded-full w-5 h-5 border border-[#c19b7c] bg-clip-content p-1 ${radio === 'radio3' ? 'bg-[#c19b7c] border-[#3c6469]' : ''}`}></div>
						<input className='absolute opacity-0' type="radio" value="radio3" id="radio3" onChange={handleRadioChange} checked={radio === 'radio3'} />
						<span className="text-[1rem]">Distributor</span>
					</label>
				</div>
			</>
		)
	}
	
	
	return (
		<>
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
					<form action="" className="flex flex-col gap-y-5 w-full">
						<div className="flex flex-row gap-x-5 w-full">
							<div className="flex flex-col gap-y-2 w-1/2">
								<label htmlFor="" className="text-[1rem]">First name</label>
								<input type="text" name="fname" id="fname" className="border w-full border-[#c19b7c] rounded-md p-2" />
							</div>
							<div className="flex flex-col gap-y-2 w-1/2">
								<label htmlFor="" className="text-[1rem]">Last name</label>
								<input type="text" name="lname" id="lname" className="border w-full border-[#c19b7c] rounded-md p-2" />
							</div>
						</div>
						<div className="flex flex-col gap-y-5 md:flex-row w-full gap-x-5">
							<div className="flex flex-col md:w-1/2">
								<label htmlFor="" className="text-[1rem]">Email</label>
								<input type="email" name="email" id="email" className="border w-full border-[#c19b7c] rounded-md p-2" />
							</div>
							<div className="flex flex-col md:w-1/2">
								<label htmlFor="" className="text-[1rem]">Phone number</label>
								<input type="text" name="phone" id="phone" className="border w-full border-[#c19b7c] rounded-md p-2" />
							</div>
						</div>
						<div className="flex flex-col">
							<label htmlFor="" className="text-[1rem]">Choose a topic</label>
							<select name="" id="" className="border w-full border-[#c19b7c] rounded-md p-2">
								<option value="">Select one...</option>
								<option value="">Billing Issues</option>
								<option value="">Returns</option>
								<option value="">Press Questions</option>
							</select>
						</div>
						<div className="flex flex-col gap-y-2">
							<label htmlFor="" className="text-[1rem]">What best describes you?</label>
							<RadioButton />
						</div>
						<div className="flex flex-col gap-y-5">
							<label htmlFor="" className="text-[1rem]">Message</label>
							<textarea name="" id="" className="w-full h-20 border min-h-[11.25rem] border-[#c19b7c] rounded-md p-2" placeholder='Type your message...'></textarea>
						</div>
						<div className="flex flex-col gap-y-5">
							<AgreeButton />
						</div>
						<div className="flex">
							<button className="text-center bg-[#3c6469] font-normal text-xs text-white py-2 px-3 rounded">
								SUBMIT
							</button>
						</div>
					</form>
				</div>
			</section>
		</>
	)
}
