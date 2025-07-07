import image from '../../../assets/fourthImage.jpg'

const SeventhMain = () => {
	return (
		<div
			id='review'
			className='relative w-full bg-cover bg-center'
			style={{ backgroundImage: `url(${image})`, height: '600px' }}
		>
			<div className='absolute bottom-0 w-full bg-black bg-opacity-70 py-8'>
				<div className='max-w-4xl mx-auto px-4'>
					<h3 className='text-white font-light text-lg md:text-xl leading-relaxed'>
						“I have never in my life witnessed a charitable organization deliver
						more per dollar than The Water Project does on a regular basis.”
						<br />
						<br />
						<a
							href='/reviews'
							className='text-white underline underline-offset-4 text-sm'
						>
							— The Belknap Family, Water Project Sponsors
						</a>
					</h3>
				</div>
			</div>
		</div>
	)
}

export default SeventhMain
