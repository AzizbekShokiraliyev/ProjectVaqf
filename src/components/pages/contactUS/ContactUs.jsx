const ContactUs = () => {
	return (
		<div className='max-w-7xl mx-auto px-4 py-12'>
			<h1 className='text-4xl font-bold text-center mb-4'>Contact Us</h1>
			<p className='text-center text-lg text-gray-600 mb-10'>
				We're here to help you help others
			</p>

			{/* Google Map */}
			<div className='mb-10 rounded-md overflow-hidden border border-gray-300'>
				<iframe
					title='Google Map'
					className='w-full h-[350px]'
					frameBorder='0'
					scrolling='no'
					marginHeight={0}
					marginWidth={0}
					src='https://maps.google.com/maps?q=the+water+project,+inc.&amp;hl=en&amp;view=map&amp;t=m&amp;ie=UTF8&amp;hq=the+water+project,+inc.&amp;hnear=&amp;radius=15000&amp;cid=5026022480813016272&amp;ll=43.209461,-71.535501&amp;spn=0.010948,0.042057&amp;z=15&amp;iwloc=A&amp;output=embed'
				/>
			</div>

			{/* Logo */}
			<div className='flex justify-center mb-10'>
				<a href='https://thewaterproject.org'>
					<img
						src='https://thewaterproject.org/images/logo-2016.png'
						alt='The Water Project Logo'
						width={200}
					/>
				</a>
			</div>

			{/* Contact Info */}
			<div className='grid md:grid-cols-2 gap-8 text-gray-800 text-base md:text-lg'>
				{/* Mailing Info */}
				<div className='space-y-6'>
					<div>
						<h2 className='font-semibold border-b border-gray-300 pb-1'>
							Mailing Address
						</h2>
						<p className='mt-3'>
							The Water Project
							<br />
							P.O. Box 3353
							<br />
							Concord, NH 03302-3353
						</p>
					</div>

					<div>
						<h2 className='font-semibold border-b border-gray-300 pb-1'>
							Telephone
						</h2>
						<p className='mt-3'>
							+1 (800) 460-8974{' '}
							<span className='text-sm'>(Toll-free from U.S. & Canada)</span>
							<br />
							+1 (603) 369-3858 <span className='text-sm'>(Direct)</span>
						</p>
					</div>

					<div>
						<h2 className='font-semibold border-b border-gray-300 pb-1'>
							Email
						</h2>
						<p className='mt-3'>
							<a
								href='mailto:support@thewaterproject.org'
								className='text-blue-600 hover:underline'
							>
								support@thewaterproject.org
							</a>
						</p>
					</div>
				</div>

				{/* Offices */}
				<div className='space-y-6'>
					<div>
						<h2 className='font-semibold border-b border-gray-300 pb-1'>
							Offices
						</h2>
						<p className='mt-3'>
							<strong>International Headquarters</strong>
							<br />
							<a
								href='https://www.google.com/maps/place/The+Water+Project/@43.2051511,-71.535165,105m/data=!3m1!1e3!4m9!1m3!3m2!1s0x0:0x244a594ddc04307e!2sthe+water+project,+inc.!3m4!1s0x89e26a9281cf9f65:0x45c004d139fcc4d0!8m2!3d43.2052799!4d-71.5348852?hl=en'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-600 hover:underline'
							>
								17 Depot Street, 2nd Floor
							</a>
							<br />
							Concord, NH 03301 - USA
						</p>
					</div>

					<div>
						<p>
							<strong>Kenya Regional Service Hub</strong>
							<br />
							<a
								href='https://www.google.com/maps/place/Kakamega,+Kenya/@0.2886014,34.7572628,571m/data=!3m1!1e3!4m5!3m4!1s0x17803c37cdba7711:0xd7380a06dc908a6a!8m2!3d0.2827307!4d34.7518631'
								target='_blank'
								rel='noopener noreferrer'
								className='text-blue-600 hover:underline'
							>
								Kakamega, Kenya
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactUs
