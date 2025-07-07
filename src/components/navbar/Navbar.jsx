import { useEffect, useRef, useState } from 'react'
import { FaUsers } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
const SideBar = () => {
	const [openMenu, setOpenMenu] = useState(null)
	const menuRef = useRef()

	const toggleMenu = menu => {
		setOpenMenu(prev => (prev === menu ? null : menu))
	}

	useEffect(() => {
		const handleClickOutside = e => {
			if (menuRef.current && !menuRef.current.contains(e.target)) {
				setOpenMenu(null)
			}
		}
		document.addEventListener('mousedown', handleClickOutside)
		return () => document.removeEventListener('mousedown', handleClickOutside)
	}, [])

	return (
		<nav
			className='fixed top-0 left-0 w-full bg-white shadow-xl border-b z-50'
			ref={menuRef}
		>
			<div className='mx-auto px-4 py-3 flex justify-between items-center'>
				<Link to='/' className='text-xl font-bold text-blue-700'>
					The Water Project
				</Link>

				<ul className='hidden md:flex space-x-6 text-sm font-medium'>
					<li>
						<Link to='' className='hover:text-blue-600'>
							Donate
						</Link>
					</li>

					<li className='relative'>
						<button
							onClick={() => toggleMenu('why')}
							className='hover:text-blue-600'
						>
							Why Water?
						</button>
						{openMenu === 'why' && (
							<ul className='absolute bg-white shadow-md mt-2 w-48'>
								<li>
									<Link to='' className='block px-4 py-2 hover:bg-gray-100'>
										Water Crisis
									</Link>
								</li>
							</ul>
						)}
					</li>

					<li className='relative'>
						<button
							onClick={() => toggleMenu('action')}
							className='hover:text-blue-600'
						>
							Take Action
						</button>
						{openMenu === 'action' && (
							<ul className='absolute bg-white shadow-md mt-2 w-56'>
								{[
									'Make a Donation',
									'Sponsor a Community',
									'Start a Fundraiser',
									'Water Challenge',
									'eGift Cards',
									'Planned Giving',
									'Corporate Sponsorship',
								].map((item, i) => (
									<li key={i}>
										<Link to='' className='block px-4 py-2 hover:bg-gray-100'>
											{item}
										</Link>
									</li>
								))}
							</ul>
						)}
					</li>

					<li className='relative'>
						<button
							onClick={() => toggleMenu('work')}
							className='hover:text-blue-600'
						>
							Our Work
						</button>
						{openMenu === 'work' && (
							<ul className='absolute bg-white shadow-md mt-2 w-60'>
								{[
									'Impact Reports',
									'Stories',
									'Blog',
									'Where We Work',
									'How We Work',
									'Sustainability',
									'YouTube',
								].map((item, i) => (
									<li key={i}>
										<Link to='' className='block px-4 py-2 hover:bg-gray-100'>
											{item}
										</Link>
									</li>
								))}
							</ul>
						)}
					</li>

					<li className='relative'>
						<button
							onClick={() => toggleMenu('about')}
							className='hover:text-blue-600'
						>
							About Us
						</button>
						{openMenu === 'about' && (
							<ul className='absolute bg-white shadow-md mt-2 w-52'>
								<li>
									<Link
										to='/about_us'
										className='block px-4 py-2 hover:bg-gray-100'
									>
										Who We Are
									</Link>
								</li>
								<li>
									<Link
										to='/financials/'
										className='block px-4 py-2 hover:bg-gray-100'
									>
										Financials
									</Link>
								</li>
								<li>
									<Link
										to='/leadership'
										className='block px-4 py-2 hover:bg-gray-100'
									>
										Leadership
									</Link>
								</li>
								<li>
									<Link
										to='/staff'
										className='block px-4 py-2 hover:bg-gray-100'
									>
										Staff
									</Link>
								</li>
								<li>
									<a
										href='https://my.hirehive.io/the-water-project'
										className='block px-4 py-2 hover:bg-gray-100'
										target='_blank'
										rel='noreferrer'
									>
										Employment
									</a>
								</li>
								<li>
									<Link
										to='/reviews'
										className='block px-4 py-2 hover:bg-gray-100'
									>
										Reviews
									</Link>
								</li>
							</ul>
						)}
					</li>

					<li className='relative'>
						<button
							onClick={() => toggleMenu('contact')}
							className='hover:text-blue-600'
						>
							Contact
						</button>
						{openMenu === 'contact' && (
							<ul className='absolute bg-white shadow-md mt-2 w-56'>
								<li>
									<Link to='' className='block px-4 py-2 hover:bg-gray-100'>
										Contact Us
									</Link>
								</li>
								{['Instagram', 'YouTube', 'Facebook', 'Twitter'].map(
									(platform, i) => (
										<li key={i}>
											<a
												href={`https://${platform.toLowerCase()}.com`}
												className='block px-4 py-2 hover:bg-gray-100'
												target='_blank'
												rel='noreferrer'
											>
												{platform}
											</a>
										</li>
									)
								)}
							</ul>
						)}
					</li>
				</ul>

				<div className='hidden md:flex items-center space-x-3'>
					<a
						href=''
						className='bg-[#D75D32] text-white px-4 py-2 rounded text-sm flex items-center gap-1'
					>
						<FaHeart />
						<span>Donate</span>
					</a>
					<Link
						to=''
						className='bg-yellow-500 text-white px-4 py-2 rounded text-sm flex items-center gap-1'
					>
						<FaUsers />
						<span>Fundraise</span>
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default SideBar
