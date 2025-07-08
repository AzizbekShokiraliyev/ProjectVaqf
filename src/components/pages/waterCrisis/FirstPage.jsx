import img1 from '../../../assets/BannerDonate.jpg'

const FirstPage = () => {
	return (
		<div className='mt-[70px]'>
			{/* Image Section */}
			<img
				src={img1}
				alt='Banner'
				className='w-full object-cover rounded-md shadow-md'
			/>

			{/* Text Section */}
			<section className='max-w-5xl mx-auto px-4 py-10 text-center'>
				<h1 className='text-2xl md:text-5xl text-[#425563] mb-6'>
					Why the Water Crisis?
				</h1>
				<p className='text-lg md:text-xl text-[#106B99] mb-8'>
					Every day in rural communities throughout sub-Saharan Africa, millions{' '}
					<br />
					of people suffer from a lack of access to clean, safe water.
				</p>

				<div className='space-y-6 text-gray-600 text-base md:text-lg leading-relaxed text-center'>
					<p>
						Globally, 1 in 9 people still have no access to clean water. But in
						the communities we serve, it's 9 out of 9. Water is a daily and
						crippling challenge. Without water you can't grow food, you can't
						build housing, you can't stay healthy, you can't stay in school and
						you can't keep working.
					</p>
					<p>
						Today, hope is on hold in over half of the developing world's
						primary schools without access to water and sanitation.
					</p>
					<p className='text-center'>
						<strong>
							But{' '}
							<a
								href=''
								target='_blank'
								rel='noopener noreferrer'
								className='text-[#106B99] hover:underline'
							>
								the water crisis
							</a>{' '}
							can be solved.
						</strong>
					</p>
				</div>
			</section>
		</div>
	)
}

export default FirstPage
