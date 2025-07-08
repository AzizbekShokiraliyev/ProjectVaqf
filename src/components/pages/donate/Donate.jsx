import { useState } from 'react'

const Donate = ({ isOpen, onClose }) => {
	const [frequency, setFrequency] = useState('once')
	const [selectedAmount, setSelectedAmount] = useState(null)
	const [amount, setAmount] = useState('1,500,000')
	const [currency, setCurrency] = useState('UZS')
	const [isDedicated, setIsDedicated] = useState(false)
	const [activeSlide, setActiveSlide] = useState('donation')

	const suggestedAmounts = [
		{ value: '3500000', label: '3.5M' },
		{ value: '2000000', label: '2M' },
		{ value: '900000', label: '900K' },
		{ value: '350000', label: '350K', popular: true },
		{ value: '200000', label: '200K' },
		{ value: '90000', label: '90K' },
	]

	const currencies = [
		{ value: 'USD', label: 'USD · US Dollar' },
		{ value: 'UZS', label: 'UZS · Uzbekistani Som' },
		{ value: 'RUB', label: 'RUB · Russian Ruble' },
		{ value: 'EUR', label: 'EUR · Euro' },
	]

	const handleAmountChange = e => {
		setAmount(e.target.value)
		setSelectedAmount(null)
	}

	const handleSubmit = e => {
		e.preventDefault()
		setActiveSlide('payment')
	}

	const handlePaymentSubmit = e => {
		e.preventDefault()
		alert('Donation submitted!')
		onClose()
	}

	if (!isOpen) return null

	return (
		<div className='fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center'>
			<div className='bg-white rounded-lg w-full max-w-2xl p-6 shadow-lg relative'>
				<button
					onClick={onClose}
					className='absolute top-4 right-4 text-gray-500 hover:text-black text-2xl'
				>
					&times;
				</button>

				<div className='mb-6'>
					<h2 className='text-center text-2xl font-bold mb-2'>
						Secure Donation
					</h2>
					<p className='text-center text-gray-600'>
						$50 Provides Clean Water for One Person. Giving once funds a new
						water project.
					</p>
				</div>

				{activeSlide === 'donation' && (
					<form onSubmit={handleSubmit} className='space-y-4'>
						<div className='flex gap-2 border rounded overflow-hidden'>
							<button
								type='button'
								onClick={() => setFrequency('once')}
								className={`flex-1 py-2 ${
									frequency === 'once'
										? 'bg-blue-600 text-white'
										: 'bg-white text-gray-800'
								}`}
							>
								Give once
							</button>
							<button
								type='button'
								onClick={() => setFrequency('monthly')}
								className={`flex-1 py-2 ${
									frequency === 'monthly'
										? 'bg-blue-600 text-white'
										: 'bg-white text-gray-800'
								}`}
							>
								Monthly
							</button>
						</div>

						<div className='grid grid-cols-3 gap-2'>
							{suggestedAmounts.map(opt => (
								<label
									key={opt.value}
									className={`text-center border rounded py-2 cursor-pointer ${
										selectedAmount === opt.value
											? 'border-blue-500 bg-blue-50'
											: 'border-gray-200'
									}`}
								>
									<input
										type='radio'
										name='suggested-amount'
										value={opt.value}
										checked={selectedAmount === opt.value}
										onChange={() => {
											setSelectedAmount(opt.value)
											setAmount(opt.value)
										}}
										className='hidden'
									/>
									{opt.label}
									{opt.popular && (
										<div className='text-xs text-blue-600 font-bold uppercase'>
											Popular
										</div>
									)}
								</label>
							))}
						</div>

						<div className='relative'>
							<input
								type='text'
								value={amount}
								onChange={handleAmountChange}
								className='w-full border rounded p-2 pr-24'
								placeholder='Other amount'
							/>
							<select
								value={currency}
								onChange={e => setCurrency(e.target.value)}
								className='absolute right-2 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded p-1'
							>
								{currencies.map(curr => (
									<option key={curr.value} value={curr.value}>
										{curr.label}
									</option>
								))}
							</select>
						</div>

						<label className='flex items-center gap-2 text-gray-700'>
							<input
								type='checkbox'
								checked={isDedicated}
								onChange={() => setIsDedicated(!isDedicated)}
							/>
							Dedicate this donation
						</label>

						<button
							type='submit'
							className='w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700'
						>
							Donate
						</button>
					</form>
				)}

				{activeSlide === 'payment' && (
					<form onSubmit={handlePaymentSubmit} className='space-y-4'>
						<h2 className='text-xl font-bold text-center mb-4'>
							Enter your payment details
						</h2>
						<input
							type='text'
							placeholder='Card number'
							className='w-full border p-2 rounded'
							required
						/>
						<div className='flex gap-2'>
							<input
								type='text'
								placeholder='MM/YY'
								className='w-1/2 border p-2 rounded'
								required
							/>
							<input
								type='text'
								placeholder='CVC'
								className='w-1/2 border p-2 rounded'
								required
							/>
						</div>
						<button
							type='submit'
							className='w-full bg-green-600 text-white py-2 rounded hover:bg-green-700'
						>
							Complete Donation
						</button>
					</form>
				)}
			</div>
		</div>
	)
}

export default Donate
