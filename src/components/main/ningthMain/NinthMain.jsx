const NinthMain = () => {
	return (
		<section className='bg-white py-16 px-4 md:px-8 max-w-6xl mx-auto'>
			<div className='grid md:grid-cols-4 gap-6 items-center'>
				<div className='md:col-span-1 text-center md:text-left'>
					<h2 className='text-xl font-semibold text-gray-800'>
						Good News in Your Inbox!
					</h2>
					<p className='text-sm text-gray-600 mt-1'>
						Get our amazing stories in your email.
					</p>
				</div>

				<div className='md:col-span-3'>
					<form
						action='https://api.form-data.com/f/wgpdz2qo28fvjjbi3y0hwd'
						method='POST'
						id='mc-embedded-subscribe-form'
						name='mc-embedded-subscribe-form'
						target='_blank'
						rel='noopener'
						className='flex flex-col md:flex-row md:items-end gap-4'
					>
						<input
							type='text'
							name='b_77fbae23030bfbb884609a73d_a87ffeb609'
							tabIndex='-1'
							className='hidden'
							defaultValue=''
							style={{ position: 'absolute', left: '-5000px' }}
						/>

						<div className='flex-1'>
							<input
								type='email'
								name='email'
								required
								placeholder='Email Address'
								className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>
						<div className='flex-1'>
							<input
								type='text'
								name='FNAME'
								required
								placeholder='First Name'
								className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>
						<div className='flex-1'>
							<input
								type='text'
								name='LNAME'
								required
								placeholder='Last Name'
								className='w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500'
							/>
						</div>

						{/* Submit Button */}
						<button
							type='submit'
							name='subscribe'
							id='mc-embedded-subscribe'
							className='bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition duration-200 flex items-center justify-center'
						>
							<span className='mr-2'>📩</span>Subscribe
						</button>
					</form>

					<p className='text-xs text-gray-500 mt-3'>
						We will not sell, rent, or give away your email address — ever. We
						value your{' '}
						<a
							href='/privacy'
							className='underline text-blue-600 hover:text-blue-700'
						>
							privacy
						</a>
						.
					</p>
				</div>
			</div>
		</section>
	)
}

export default NinthMain
