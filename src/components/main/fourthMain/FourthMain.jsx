import '@fontsource/patrick-hand'
import image from '../../../assets/thirdImage.jpg'

const FourtMain = () => {
	return (
		<div className='flex flex-col md:flex-row h-auto md:h-[90vh]'>
			{/* Left Text Section */}
			<div className='md:w-1/2 w-full flex items-center justify-center bg-white px-8 py-12'>
				<div className='max-w-xl'>
					<h1 className='font-hand text-[#BA5954] text-2xl md:text-[40px] leading-tight mb-6 text-center md:text-center'>
						A gift of lasting opportunity.
					</h1>

					<p className='text-gray-700 text-base md:text-lg mb-4 text-center'>
						You'll come alongside our local teams who'll build water wells,
						small dams, spring protections and other water sources.
					</p>
					<p className='text-gray-700 text-base md:text-lg mb-6 text-center'>
						Then, together, we'll make sure they keep working for years to come,
						creating opportunity all along the way.
					</p>
				</div>
			</div>

			{/* Right Image Section */}
			<div className='md:w-1/2 w-full'>
				<img
					src={image}
					alt='Clean Water'
					className='h-full w-full object-cover'
				/>
			</div>
		</div>
	)
}

export default FourtMain
