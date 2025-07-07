import '@fontsource/patrick-hand'
import iphone from '../../../assets/iphone.jpg'

const FifthMain = () => {
	return (
		<div className='w-full py-10 px-6'>
			<div className='max-w-5xl mx-auto text-center'>
				<h3 className='text-xl md:text-5xl text-[#BA5954] leading-relaxed font-semibold'>
					<span className='font-hand '>
						Never wonder again if your charity matters.
					</span>
				</h3>
				<br />
				<div className='flex flex-col md:flex-row items-center justify-center mt-6 gap-6'>
					<div className='hidden sm:block sm:w-[150px]'>
						<img
							src={iphone}
							alt='See What Happens When You Give - Impact Snapshot Screenshot'
							width={170}
							height={320}
							loading='lazy'
							className='object-cover'
						/>
					</div>
					<div className='sm:w-full md:w-2/3 text-left text-gray-800 px-[30px]'>
						<p className='mb-4'>
							Seeing is believing and we provide everything you'll need to
							experience the impact of your generosity and to celebrate with the
							people you help.
						</p>
						<p>
							<a
								href='/sponsor-a-water-project'
								className='text-blue-700 border-b border-dotted border-blue-700 hover:underline'
							>
								Choose a community to support
							</a>{' '}
							and you'll get stories, maps, photos and other information right
							in your inbox about who and how you’ve helped.
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default FifthMain
