import img3 from '../../../assets/happypeople.jpg'
import img2 from '../../../assets/katie_b.jpg'
import img1 from '../../../assets/samuel_n.jpg'

const FourthAbout = () => {
	return (
		<div>
			<section className='w-full py-6 bg-white'>
				<div className='max-w-4xl mx-auto px-4 text-center'>
					<header className='mb-10'>
						<h2 className='text-3xl md:text-4xl text-gray-800'>
							Meet some of the team
						</h2>
					</header>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 py-5'>
						<div className='flex flex-col items-center text-center'>
							<img
								src={img2}
								alt='Kati Bucciero'
								className='w-56 h-56 rounded-full object-cover mb-4'
							/>
							<p className='text-lg font-semibold'>Kati Bucciero</p>
							<p className='text-sm text-gray-500 mb-2'>Fundraiser</p>
							<p className='text-gray-700 max-w-sm'>
								I'm very aware of the many blessings I have, but it also gave me
								a newfound understanding of the many families that are
								constantly suffering. It's something that I just can't ignore,
								so I'm taking action to help.
							</p>
						</div>

						<div className='flex flex-col items-center text-center'>
							<img
								src={img1}
								alt='Samuel Ngidiwe'
								className='w-56 h-56 rounded-full object-cover mb-4'
							/>
							<p className='text-lg font-semibold'>Samuel Ngidiwe</p>
							<p className='text-sm text-gray-500 mb-2'>TWP Program Officer</p>
							<p className='text-gray-700 max-w-sm'>
								What I like about my job is the transforming and healing power
								of clean water in the lives of people in the community we serve.
							</p>
						</div>
					</div>
				</div>
			</section>
			<section>
				<div
					className='w-full h-[600px] bg-cover bg-center bg-no-repeat flex items-center justify-center'
					style={{ backgroundImage: `url(${img3})` }}
				>
					<p className='bg-black/30 text-white text-center px-6 py-4 text-2xl md:text-4xl font-semibold max-w-4xl'>
						Every gift is directly connected to a community. You'll know exactly
						who you helped.
					</p>
				</div>
			</section>
			<section id='about' className='w-full py-12 bg-white'>
				<div className='max-w-6xl mx-auto px-4 text-center'>
					<header className='mb-10'>
						<h2 className='text-3xl md:text-4xl text-gray-800'>
							Real Motivation
						</h2>
					</header>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-left'>
						<div>
							<p className='text-gray-700 mb-4'>
								The Water Project was founded by Christ-followers who believe
								Jesus makes an unambiguous call to "provide a cup of cold water"
								and to answer the needs of those who say "I am thirsty" (Matt
								25).
							</p>
							<p className='text-gray-700 mb-4'>
								That said, it's important to note that we work with everyone,
								for everyone. Our belief motivates our action. It doesn't limit
								our reach. It forms the basis of our integrity and the assurance
								that lives can be truly changed.
							</p>
							<p className='text-gray-700'>
								The work we do through The Water Project is for the common good
								of the general public. We are <strong>NOT</strong> a religious
								organization.
							</p>
						</div>

						<div>
							<p className='text-gray-700 mb-4'>
								The reason we do this work is because of what we believe. This
								distinction allows us to work with people of all backgrounds and
								faiths for the benefit of all people. Our projects do not
								discriminate on the basis of race, creed, ethnic or religious
								backgrounds. We serve others.
							</p>
							<p className='text-gray-700 mb-4'>
								These essential, life-sustaining water projects speak to what
								loving one's neighbor truly means.
							</p>
							<p className='text-gray-700'>
								We exist to see the world changed through this love and hope to
								truly unlock potential with our neighbors.
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default FourthAbout
