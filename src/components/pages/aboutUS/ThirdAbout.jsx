import { FaBook } from 'react-icons/fa'
import { GrLocationPin } from 'react-icons/gr'

const ThirdAbout = () => {
	return (
		<div>
			<section
				id='work'
				className='w-full min-h-screen flex flex-col justify-center items-center px-4 py-12 text-center bg-white'
			>
				<header className='mb-8'>
					<h2 className='text-3xl md:text-4xl text-[#2D2D2D]'>Real People</h2>
				</header>

				<div className='max-w-4xl space-y-6 mb-10 '>
					<p className='text-base md:text-lg text-gray-800'>
						We are committed to bringing people together to solve the problem of
						finding clean water. Whether it's our local teams in the field, the{' '}
						<a href='/staff' className='text-blue-600 underline'>
							folks back at our headquarters
						</a>
						, our donors and{' '}
						<a href='/start-a-fundraiser' className='text-blue-600 underline'>
							fundraisers
						</a>{' '}
						or the{' '}
						<a href='/community/' className='text-blue-600 underline'>
							communities we serve
						</a>
						, we believe water doesn’t change everything. People do. These
						relationships are the heart and soul of our work.
					</p>

					<p className='text-base md:text-lg text-gray-800'>
						Yes, clean water is foundational and it’s at the foundation of what
						we do at The Water Project. But{' '}
						<a href='/how-we-work' className='text-blue-600 underline'>
							how we do it
						</a>{' '}
						is what’s important. We invest in local teams who provide clean
						water and unlock potential in the villages where people live.
					</p>
				</div>

				{/* Centered Video */}
				<div className='w-full max-w-3xl aspect-video mb-10'>
					<iframe
						className='w-full h-full rounded'
						src='https://www.youtube.com/embed/yR3Ec0b04s4?enablejsapi=1'
						title='How We Work'
						loading='lazy'
						allowFullScreen
					></iframe>
				</div>

				<p className='max-w-3xl text-base md:text-lg text-gray-800 mb-10'>
					We pour a ton into our local (international based) teams in countries
					like Kenya, Uganda and Sierra Leone. We teach, we lead, and then we
					step back to learn and grow. We celebrate our teams' innovations and
					victories. We stand by and support them through difficulties or
					challenges. And we do this because we believe investing locally is
					where the magic happens.
				</p>

				<div className='text-3xl text-gray-300 mb-10'>—</div>

				{/* Image + Testimonial Centered */}
				<div className='flex flex-col md:flex-row items-center justify-center gap-10 max-w-4xl'>
					<img
						src='https://res.cloudinary.com/the-water-project/image/upload/c_fill,dpr_auto,q_auto:eco,w_300,f_auto/site/catherine.jpg'
						alt='Catherine'
						className='w-[250px] h-[250px] rounded-full object-cover'
					/>
					<p className='text-base md:text-lg text-gray-800 text-center md:text-left max-w-md'>
						When you support The Water Project, you support clean water{' '}
						<em>and</em> our in-country teams. This means you invest in a water
						project <em>and</em> Catherine, one of our local leaders. You send
						her to leadership training, you invest in her education and you
						support her as she walks alongside communities, teaching them and
						growing their potential.
					</p>
				</div>
			</section>
			<section className='w-full bg-[#f8f9fa] py-12'>
				<div className='max-w-2xl mx-auto text-center px-4'>
					<p className='text-lg md:text-xl text-gray-800 mb-6'>
						Join our community of world-changers, investing in local teams. Make
						The Water Promise!
					</p>
					<a
						href='?form=give-clean-water'
						className='inline-flex items-center px-6 py-3 bg-[#D75B30] text-white text-lg rounded-md transition duration-200'
					>
						<span className='mr-2'>📅</span> Donate Monthly
					</a>
				</div>
			</section>
			<section id='about' className='w-full py-12 bg-white'>
				<div className='max-w-6xl mx-auto px-4'>
					<header className='text-center mb-10'>
						<h2 className='text-3xl md:text-4xl text-gray-800 mt-0'>
							Real Impact
						</h2>
					</header>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-700 text-base md:text-lg'>
						<div>
							<p className='mb-4'>
								We believe in accountability and transparency to all the people
								we serve including our donors, our communities and our teams.
							</p>
							<p>
								That's why we love sharing the awesome reports we receive from
								the field. They are an invitation to be part of the work and
								celebrations alongside us. When you support The Water Project,
								you unlock access to real people, both here at our headquarters
								and via our work in the field. Every gift is directly connected
								to a community.
							</p>
						</div>
						<div>
							<p className='mb-4'>
								Every gift unlocks a story, a person, a future.{' '}
								<a
									href='/why-water'
									className='text-blue-600 underline hover:text-blue-800'
								>
									Every gift has impact.
								</a>
							</p>
							<p>
								To ensure that impact lasts, we also believe in monitoring all
								our projects, new and old, to make sure they are still
								functioning properly. And we fix what's broken. We believe water
								flowing today should still be flowing in the future. To see all
								our projects and their current functionality, check out our{' '}
								<a
									href='/impact-opportunities'
									className='text-blue-600 underline hover:text-blue-800'
								>
									Project Directory.
								</a>
							</p>
						</div>
					</div>

					<div className='flex flex-col md:flex-row justify-center items-center gap-6 mt-10 text-center'>
						<a
							href='/our-water-projects'
							className='bg-[#2D6484] hover:bg-blue-700 text-white text-lg px-6 py-3 rounded shadow flex items-center gap-1'
							title='See every water project we have built.'
						>
							<GrLocationPin /> <span>See Our Reporting</span>
						</a>
						<a
							href='/community/interest_story'
							className='bg-[#A0BF54] hover:bg-green-700 text-white text-lg px-6 py-3 rounded shadow flex items-center gap-1'
							title='See how a new well or water project changes lives.'
						>
							<FaBook /> <span>Read Stories from the Field</span>
						</a>
					</div>
				</div>
			</section>
		</div>
	)
}

export default ThirdAbout
