import hungerIcon from '../../../assets/garden-icon.png'
import healthIcon from '../../../assets/health-icon.png'
import educationIcon from '../../../assets/school-house.png'
import povertyIcon from '../../../assets/thought.png'

const FourthPage = () => {
	return (
		<div className='py-16 bg-white'>
			<div className='max-w-6xl mx-auto px-4'>
				<h2 className='text-4xl font-bold text-center text-[#2D6484] mb-12'>
					Access to Clean Water Improves...
				</h2>

				<div className='grid md:grid-cols-2 gap-12'>
					{/* Education */}
					<div className='flex items-start gap-4'>
						<div className='flex-1'>
							<a
								href=''
								className='text-xl font-semibold text-[#2D6484] hover:underline'
								target='_blank'
								rel='noopener noreferrer'
							>
								Education
							</a>
							<p className='mt-2 text-gray-700'>
								With water right on school property, students won’t miss class
								to quench their thirst, clean their classrooms, or supply school
								kitchens with water. With water at home, kids don’t waste
								homework time walking long distances in search of water for
								their households.
							</p>
						</div>
						<a href='' target='_blank' rel='noopener noreferrer'>
							<img src={educationIcon} alt='Education' className='w-20 h-20' />
						</a>
					</div>

					{/* Health */}
					<div className='flex items-start gap-4'>
						<div className='flex-1'>
							<a
								href=''
								className='text-xl font-semibold text-[#2D6484] hover:underline'
								target='_blank'
								rel='noopener noreferrer'
							>
								Health
							</a>
							<p className='mt-2 text-gray-700'>
								Water projects close to home rescue people from drinking
								whatever dirty water they can find. More water also means less
								rationing, so it’s easier to stay hydrated, wash hands, and
								clean homes, preventing future illnesses.
							</p>
						</div>
						<a href='' target='_blank' rel='noopener noreferrer'>
							<img src={healthIcon} alt='Health' className='w-20 h-20' />
						</a>
					</div>

					{/* Hunger */}
					<div className='flex items-start gap-4'>
						<div className='flex-1'>
							<a
								href=''
								className='text-xl font-semibold text-[#2D6484] hover:underline'
								target='_blank'
								rel='noopener noreferrer'
							>
								Hunger
							</a>
							<p className='mt-2 text-gray-700'>
								In our service areas, almost everyone has a farm or garden. To
								them, a lack of water means a lack of food. Improved crop
								irrigation equates to healthier and more plentiful crops.
							</p>
						</div>
						<a href='' target='_blank' rel='noopener noreferrer'>
							<img src={hungerIcon} alt='Hunger' className='w-20 h-20' />
						</a>
					</div>

					{/* Poverty */}
					<div className='flex items-start gap-4'>
						<div className='flex-1'>
							<a
								href=''
								className='text-xl font-semibold text-[#2D6484] hover:underline'
								target='_blank'
								rel='noopener noreferrer'
							>
								Poverty
							</a>
							<p className='mt-2 text-gray-700'>
								Sourcing water when it’s scarce day after day saps everyone’s
								time and energy. With water at their fingertips, people spend
								more time investing in their households and livelihoods.
							</p>
						</div>
						<a href='' target='_blank' rel='noopener noreferrer'>
							<img src={povertyIcon} alt='Poverty' className='w-20 h-20' />
						</a>
					</div>
				</div>

				<div className='text-center mt-12'>
					<a
						href=''
						target='_blank'
						rel='noopener noreferrer'
						className='inline-block bg-[#2D6484] text-white text-lg px-6 py-3 rounded-md shadow transition duration-300'
					>
						Learn More about the Water Crisis
					</a>
				</div>
			</div>
		</div>
	)
}

export default FourthPage
