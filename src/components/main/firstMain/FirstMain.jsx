import '@fontsource/patrick-hand'
import { useState } from 'react'
import { FaHeart } from 'react-icons/fa6'
import image from '../../../assets/firstImage.jpg'

const donationOptions = {
	oneTime: [
		'3.5M UZS',
		'2M UZS',
		'900K UZS',
		'350K UZS',
		'200K UZS',
		'90K UZS',
	],
	monthly: ['1M UZS', '500K UZS', '200K UZS', '100K UZS', '50K UZS', '25K UZS'],
}

const FirstMain = () => {
	const [mode, setMode] = useState('oneTime')
	const [selectedAmount, setSelectedAmount] = useState('150.000')
	const [amount, setAmount] = useState('150.000')

	const handleModeChange = newMode => {
		setMode(newMode)
		setSelectedAmount('')
	}

	const handleAmountClick = amount => {
		setSelectedAmount(amount)
	}

	return (
		<div
			className='h-[90vh] bg-cover bg-center'
			style={{ backgroundImage: `url(${image})` }}
		>
			<div className='flex justify-start items-start my-14 mx-14'>
				<div className='min-h-[600px] w-[450px] bg-white rounded-md mt-12 mb-12 px-8 py-8 shadow-lg'>
					<div className='font-hand text-[#2D6484] text-5xl leading-tight mb-4 text-center'>
						<h1>Give Water.</h1>
						<h1>Give Life.</h1>
					</div>

					<p className='mb-6 text-gray-700 text-center font-bold'>
						Just $50 can provide one person with <br /> safe &amp; reliable
						water
					</p>

					{/* Toggle Donation Mode */}
					<div className='flex justify-between gap-4'>
						<button
							onClick={() => handleModeChange('oneTime')}
							className={`w-1/2 rounded-md border border-[#2D6484] px-4 py-2 shadow-sm transition-colors duration-200 ${
								mode === 'oneTime'
									? 'bg-[#2D6484] text-white'
									: 'text-[#2D6484] hover:bg-[#EAEFF2]'
							}`}
						>
							One-time
						</button>
						<button
							onClick={() => handleModeChange('monthly')}
							className={`w-1/2 flex items-center justify-center gap-2 rounded-md border border-[#2D6484] px-4 py-2 shadow-sm transition-colors duration-200 ${
								mode === 'monthly'
									? 'bg-[#2D6484] text-white'
									: 'text-[#2D6484] hover:bg-[#EAEFF2]'
							}`}
						>
							<FaHeart />
							<span>Monthly</span>
						</button>
					</div>

					{/* Donation Amount Buttons */}
					<div className='grid grid-cols-3 gap-4 mt-10'>
						{donationOptions[mode].map((amount, index) => (
							<button
								key={index}
								onClick={() => handleAmountClick(amount)}
								className={`rounded-md border border-[#2D6484] px-4 py-2 text-sm text-[#2D6484] shadow-sm transition-colors duration-200 ${
									selectedAmount === amount
										? 'bg-[#2D6484] text-white'
										: 'hover:bg-[#EAEFF2]'
								}`}
							>
								{amount}
							</button>
						))}
					</div>

					{/* Input  */}
					<div className='w-full mt-5 h-[60px]'>
						<input
							type='text'
							value={amount}
							onChange={e => setAmount(e.target.value)}
							className='w-full h-full px-4 py-2 text-2xl text-[#2D6484] font-semibold border border-[#2D6484] rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-[#2D6484]'
						/>
					</div>

					{/* Donate */}
					<div className='w-full h-[60px]'>
						<button className='mt-6 w-full h-full px-4 py-2 text-xl text-white font-semibold border border-[#2D6484] rounded-md shadow-sm bg-[#2D6484]'>
							Donate Now
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FirstMain
