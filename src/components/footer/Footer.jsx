export default function Footer() {
	return (
		<footer className='bg-[#2D6484] text-white px-6 py-12'>
			{/* Desktop layout */}
			<div className='hidden md:flex justify-center space-x-12'>
				<FooterColumn title='About Us'>
					<FooterLink href='/about_us'>Who We Are</FooterLink>
					<FooterLink href='/waterpromise'>The Water Promise</FooterLink>
					<FooterLink href='/where-we-work'>Where We Work</FooterLink>
					<FooterLink href='/why-water/water-crisis'>Why Water</FooterLink>
					<FooterLink href='/financials'>Financials</FooterLink>
				</FooterColumn>
				<FooterColumn title='Take Action'>
					<FooterLink href='/sponsor-a-water-project'>
						Sponsor a Project
					</FooterLink>
					<FooterLink href='/start-a-fundraiser'>Fundraise</FooterLink>
					<FooterLink href='/giftcards/'>Buy Gift Cards</FooterLink>
					<FooterLink href='/community/corporate-sponsors/'>
						Give as a Company
					</FooterLink>
					<FooterLink href='/thewaterchallenge'>Give as a School</FooterLink>
				</FooterColumn>
				<FooterColumn title='Resources'>
					<FooterLink href='https://brandfolder.com/thewaterproject' external>
						Media & Resources
					</FooterLink>
					<FooterLink href='/resources/twp-handouts.pdf'>
						Info Handouts
					</FooterLink>
					<FooterLink href='/resources/lesson-plans/'>
						Teaching Tools
					</FooterLink>
					<FooterLink href='https://shop.thewaterproject.org' external>
						Shop Our Store
					</FooterLink>
					<FooterLink href='/community/mytwp_login'>Login</FooterLink>
				</FooterColumn>
				<FooterColumn title='Follow Us'>
					<FooterLink href='/community/'>Blog</FooterLink>
					<FooterLink href='https://youtube.com/thewaterproject' external>
						YouTube
					</FooterLink>
					<FooterLink href='https://instagram.com/thewaterprojectinc' external>
						Instagram
					</FooterLink>
					<FooterLink href='https://facebook.com/thewaterproject' external>
						Facebook
					</FooterLink>
					<FooterLink href='https://twitter.com/thewaterproject' external>
						Twitter
					</FooterLink>
				</FooterColumn>
				<FooterColumn title='Contact'>
					<FooterLink href='/contact-us'>Comments</FooterLink>
					<li>800.460.8974</li>
					<li className='text-sm'>
						<a href='mailto:support@thewaterproject.org'>
							support@thewaterproject.org
						</a>
					</li>
					<FooterLink href='https://support.thewaterproject.org' external>
						Questions?
					</FooterLink>
					<FooterLink href='/donate-cryptocurrency'>Donate Crypto</FooterLink>
				</FooterColumn>
			</div>

			{/* CTA Button */}
			<div className='text-center mt-10'>
				<a
					href='?form=give-clean-water'
					className='bg-red-600 hover:bg-red-700 px-6 py-3 text-white text-lg rounded shadow inline-block'
				>
					💧 Give Water. Donate Now »
				</a>
			</div>

			{/* Mobile layout */}
			<div className='md:hidden mt-10 space-y-6 text-center'>
				<div className='flex justify-around'>
					<div>
						<ul className='space-y-2'>
							<FooterLink href='/about_us'>Who We Are</FooterLink>
							<FooterLink href='/why-water/solving-the-water-crisis'>
								How We Work
							</FooterLink>
							<FooterLink href='/community'>Weekly Blog</FooterLink>
						</ul>
					</div>
					<div>
						<ul className='space-y-2'>
							<FooterLink href='/sponsor-a-water-project'>
								Sponsor a Project
							</FooterLink>
							<FooterLink href='/start-a-fundraiser'>Fundraise</FooterLink>
							<FooterLink href='/donate-cryptocurrency'>
								Donate Crypto
							</FooterLink>
						</ul>
					</div>
				</div>
				<div>
					<a href='tel:18004608974' className='text-2xl text-white'>
						1-800-460-8974
					</a>
				</div>
				<div className='flex justify-center space-x-4'>
					<FooterIconLink
						href='https://facebook.com/thewaterproject'
						src='/images/facebook.png'
						alt='Facebook'
					/>
					<FooterIconLink
						href='https://twitter.com/thewaterproject'
						src='/images/twitter.png'
						alt='Twitter'
					/>
				</div>
			</div>

			{/* Badges and bottom text */}
			<div className='mt-12 text-center'>
				<div className='hidden md:flex justify-center items-center space-x-8 mb-6'>
					<FooterBadge
						href='https://analytics.excellenceingiving.com/transparency'
						src='/images/Excellence-in-Giving-Certified-Transparent.png'
						alt='Excellence in Giving'
					/>
					<FooterBadge
						href='https://greatnonprofits.org/org/the-water-project-inc'
						src='/images/2024TRbadge-lg.png'
						alt='Top-rated nonprofit'
					/>
					<FooterBadge
						href='/'
						src='/images/twp_white_logo.png'
						alt='The Water Project'
					/>
					<FooterBadge
						href='https://www.guidestar.org/profile?id=26-1455510'
						src='/images/candid2024.png'
						alt='Candid Platinum'
					/>
					<FooterBadge
						href='https://www.charitynavigator.org/ein/261455510'
						src='/images/four-star-charity-navigator.png'
						alt='Charity Navigator'
					/>
				</div>
				<p className='text-sm text-gray-300'>
					The Water Project is a 501(c)(3) non-profit international water
					charity
					<br />
					PO Box 3353 - Concord, NH - 03302-3353
					<br />
					<a href='/privacy' className='underline'>
						Privacy Policy
					</a>{' '}
					|{' '}
					<a href='/terms' className='underline'>
						Terms of Use
					</a>{' '}
					© 2007 - 2025
					<br />
					EIN: 26-1455510
				</p>
			</div>
		</footer>
	)
}

function FooterColumn({ title, children }) {
	return (
		<div className='w-40'>
			<h4 className='font-bold mb-3'>{title}</h4>
			<ul className='space-y-2 text-sm'>{children}</ul>
		</div>
	)
}

function FooterLink({ href, children, external = false }) {
	return (
		<li>
			<a
				href={href}
				className='hover:underline'
				target={external ? '_blank' : '_self'}
				rel={external ? 'noopener noreferrer' : undefined}
			>
				{children}
			</a>
		</li>
	)
}

function FooterIconLink({ href, src, alt }) {
	return (
		<a href={href} target='_blank' rel='noopener noreferrer'>
			<img src={src} alt={alt} className='w-8 h-8' />
		</a>
	)
}

function FooterBadge({ href, src, alt }) {
	return (
		<a href={href} target='_blank' rel='noopener noreferrer'>
			<img src={src} alt={alt} className='h-16 object-contain' />
		</a>
	)
}
