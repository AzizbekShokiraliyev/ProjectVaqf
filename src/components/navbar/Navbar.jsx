import { useEffect, useRef, useState } from 'react'
import { FaUsers } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.jpg'

const Navbar = () => {
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
					<img src={Logo} className='w-[70px] h-[60px]' />
				</Link>

				<ul className='hidden md:flex space-x-6 text-sm font-medium'>
					<li>
						<Link to='/donate' className='hover:text-blue-600'>
							Donate
						</Link>
					</li>

					<li className='relative'>
						<button
							onClick={() => toggleMenu('why')}
							className='hover:text-blue-600'
						>
							<Link to='/waterCrisis'>Why Water?</Link>
						</button>
					</li>

					<li className='relative'>
						<button
							onClick={() => toggleMenu('action')}
							className='hover:text-blue-600'
						>
							Take Action
						</button>
					</li>

					<li className='relative'>
						<button
							onClick={() => toggleMenu('work')}
							className='hover:text-blue-600'
						>
							Our Work
						</button>
					</li>

					<li className='relative'>
						<button
							onClick={() => toggleMenu('about')}
							className='hover:text-blue-600'
						>
							<Link to='/aboutUs'>About Us</Link>
						</button>
					</li>

					<li className='relative'>
						<button
							onClick={() => toggleMenu('contact')}
							className='hover:text-blue-600'
						>
							<Link to='contactUs'>Contact</Link>
						</button>
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
						className='bg-[#DC9027] text-white px-4 py-2 rounded text-sm flex items-center gap-1'
					>
						<FaUsers />
						<span>Fundraise</span>
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
