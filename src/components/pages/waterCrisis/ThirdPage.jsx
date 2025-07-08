import '@fontsource/patrick-hand'
import image from '../../../assets/childWithGlasses.jpg'

const ThirdPage = () => {
	return (
		<div className='flex flex-col md:flex-row'>
			{/* Left Image Section */}
			<div className='md:w-1/2 w-full flex items-center justify-center'>
				<div className='max-w-xl text-center'>
					<p className='text-gray-700 text-[14px] md:text-[16px] leading-relaxed mb-8'>
						Girls under the age of 15 are twice as likely as boys to be the
						family member responsible for fetching water. We believe she
						deserves to take water for granted, just like you. To pursue a
						hopeful future, she needs water - every day.
					</p>

					<div className='flex justify-center'>
						<a
							href='#'
							className='text-[#2D6484] transition-colors px-6 py-3 text-[18px]'
						>
							You can provide it.
						</a>
					</div>
				</div>
			</div>

			{/* Right Text Section */}
			<div className='md:w-1/2 w-full'>
				<img src={image} className='w-full h-[250px] md:h-[400px] ' />
			</div>
		</div>
	)
}

export default ThirdPage
