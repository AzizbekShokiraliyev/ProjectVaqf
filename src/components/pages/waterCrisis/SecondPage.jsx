import '@fontsource/patrick-hand'
import image from '../../../assets/childWithBottle.jpg'

const SecondPage = () => {
	return (
		<div className='flex flex-col md:flex-row'>
			{/* Left Image Section */}
			<div className='md:w-1/2 w-full'>
				<img src={image} className='w-full h-[250px] md:h-[400px] ' />
			</div>

			{/* Right Text Section */}
			<div className='md:w-1/2 w-full flex items-center justify-center'>
				<div className='max-w-xl text-center'>
					<p className='text-gray-700 text-[14px] md:text-[16px] leading-relaxed mb-8'>
						Children often bear the burden of walking miles each day to find
						water in streams and ponds—water that’s often contaminated with
						disease. This daily struggle makes them and their families sick.
						Illness and lost time rob entire communities of their futures.
					</p>

					<div className='flex justify-center'>
						<a
							href='#'
							className='text-[#2D6484] transition-colors px-6 py-3 text-[18px]'
						>
							You can change that.
						</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SecondPage
