import '@fontsource/patrick-hand'
import image2 from '../../../assets/celebrate_water.jpg'
import image from '../../../assets/water_glass.jpg'

const SixthPage = () => {
	return (
		<div>
			<div className='flex flex-col md:flex-row'>
				{/* Left Image Section */}
				<div className='md:w-1/2 w-full'>
					<img src={image} className='w-full h-[250px] md:h-[600px] ' />
				</div>

				{/* Right Text Section */}
				<div className='md:w-1/2 w-full flex items-center justify-center'>
					<div className='max-w-xl text-center'>
						<p className='text-gray-700 text-[14px] md:text-[16px] leading-relaxed mb-8'>
							Access to safe water improves the health of families and children,
							keeps girls in school, gives people back their time lost
							collecting water, and empowers the leaders of tomorrow. No wonder
							it’s estimated that every $1 invested in water and sanitation
							programs yields up to $12 in economic returns.
						</p>
						<br />
						<p className='text-gray-700 text-[14px] md:text-[16px] leading-relaxed mb-8'>
							Your support will make that true in the lives of people every day,
							as they are able to rely on safe water through The Water Project.
						</p>
					</div>
				</div>
			</div>
			<div className='relative w-full h-[500px]'>
				{/* Image in the background (still an <img> tag) */}
				<img
					src={image2}
					alt='Florence standing near clean water source'
					className='w-full h-full object-cover absolute top-0 left-0 z-0'
				/>

				{/* Overlay (optional for contrast) */}
				<div className='absolute top-0 left-0 w-full h-full bg-black/30 z-10' />

				{/* Text Content */}
				<div className='relative z-20 flex flex-col justify-center items-center h-full text-center px-4'>
					<h1 className='text-3xl md:text-5xl font-bold text-white'>
						Meet Florence
					</h1>
					<p className='mt-4 text-lg md:text-xl text-white'>
						See what access to water means for her school.
					</p>
				</div>
			</div>
		</div>
	)
}

export default SixthPage
