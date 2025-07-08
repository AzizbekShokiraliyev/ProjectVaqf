import img from '../../../assets/grandma.jpg'

const SecondAbout = () => {
	return (
		<div>
			<div className='w-full px-4 md:px-10 mb-10'>
				<section id='work' className='max-w-5xl mx-auto'>
					<header className='mb-6'>
						<h2 className='text-3xl md:text-4xl text-center pt-6 text-[#2D2D2D]'>
							Real Problems
						</h2>
					</header>

					<p className='text-base md:text-lg text-gray-800 leading-relaxed mb-6'>
						The water crisis is real. It’s affecting women, children, families
						and farmers. Women and girls in sub-Saharan Africa are spending
						hours a day fetching dirty water which leads to illness and disease,
						robbing entire communities of their futures.
						<br />
						<br />
						Lack of access to safe water and proper sanitation limits{' '}
						<a href='/' className='text-blue-600 underline'>
							education
						</a>{' '}
						and food production, it harms health and leads to a{' '}
						<a href='/' className='text-blue-600 underline'>
							cycle of poverty
						</a>
						.
					</p>

					<div className='relative w-full aspect-video mb-8'>
						<iframe
							className='absolute top-0 left-0 w-full h-full rounded'
							src='https://www.youtube.com/embed/1aW7fpd4GdY?enablejsapi=1'
							title='Empowering the Girl Child'
							loading='lazy'
							allowFullScreen
						></iframe>
					</div>

					<p className='text-base md:text-lg text-gray-800 leading-relaxed mb-8'>
						We want to help our neighbors and we know you do too. When you
						support The Water Project, you help bring clean water through new
						wells, rehabbed wells, sand dams, rainwater catchment systems and/or
						spring protections to schools, medical clinics and villages.
						<br />
						<br />
						We believe local in-country solutions, through local national
						leaders, can help end the water crisis one partnership at a time. We
						can’t wait to bring you into the heart of their stories.
					</p>

					<div className='text-center'>
						<a
							href='/how-we-work'
							className='inline-block bg-[#A0BF54] text-white text-lg font-semibold px-6 py-3 rounded transition'
						>
							See How We Work
						</a>
					</div>
				</section>
			</div>

			<div
				className='w-full h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center'
				style={{ backgroundImage: `url(${img})` }}
			>
				<p className='bg-black/30 text-white text-center px-6 py-4 text-2xl md:text-4xl font-semibold max-w-4xl'>
					Every gift is directly connected to a community. You'll know exactly
					who you helped.
				</p>
			</div>
		</div>
	)
}

export default SecondAbout
