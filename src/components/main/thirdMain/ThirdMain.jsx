import '@fontsource/patrick-hand'
import image from '../../../assets/secondImage.jpg'

const ThirdMain = () => {
	return (
		<div className='flex flex-col md:flex-row h-auto md:h-[90vh]'>
			{/* Left Image Section */}
			<div className='md:w-1/2 w-full'>
				<img
					src={image}
					alt='Clean Water'
					className='h-full w-full object-cover'
				/>
			</div>

			{/* Right Text Section */}
			<div className='md:w-1/2 w-full flex items-center justify-center bg-white px-8 py-12'>
				<div className='max-w-xl'>
					<h1 className='font-hand text-[#BA5954]  text-2xl md:text-[40px] text-center  mb-6 md:text-center'>
						Himmat loyihasi
					</h1>

					<p className='text-gray-700 text-base md:text-xl font-second mb-4 text-center'>
						Bu sadaqai joriya. Sizning ehsoningiz qiyomatgacha davom etadigan savob bo‘ladi."
					</p>
					<p className='text-gray-700 text-base font-second font-bold md:text-xl mb-6 text-center'>
						"Ehsonning mukofoti faqat ehsondir!
						<p className='text-end font-normal'>(Ar-Rahmon surasi, 60-oyat)</p>
					</p>

					<div className='flex justify-center mt-10'>
						<button className='bg-[#2D6484] font-second text-lg text-white px-6 py-3 rounded-md shadow-md hover:bg-[#244d6b] transition'>
							Batafsil
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ThirdMain
