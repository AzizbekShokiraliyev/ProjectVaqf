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
					<h1 className='font-hand text-[#BA5954] text-2xl md:text-[40px] leading-tight mb-6 text-center md:text-left'>
						Clean water is a whole family concern.
					</h1>

					<p className='text-gray-700 text-base md:text-lg mb-4 text-center'>
						Finding water is a daily challenge for young girls, moms, and sons.
						With a charitable donation today, you can lift this burden.
					</p>
					<p className='text-gray-700 text-base md:text-lg mb-6 text-center'>
						Providing a reliable and safe water source will unlock potential by
						returning time for study, work, and imagination.
					</p>

					<div className='flex justify-center mt-10'>
						<button className='bg-[#2D6484] text-white px-6 py-3 rounded-md shadow-md hover:bg-[#244d6b] transition'>
							Learn More
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ThirdMain
