import { useEffect, useRef, useState } from 'react'
import { FaUsers } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.jpg'

const Navbar = ({ openDonateModal }) => {
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
					<img src={Logo} className='w-[80px] h-[70px]' />
				</Link>

				<ul className='hidden md:flex space-x-6 text-sm font-medium'>
					<li>
						<button onClick={openDonateModal} className='hover:text-blue-600'>
							Maqsad
						</button>
					</li>
					<li>
						<Link to='/waterCrisis' className='hover:text-blue-600'>
							Jamoamiz
						</Link>
					</li>
					<li>
						<button className='hover:text-blue-600'>Natijalar</button>
					</li>
					<li>
						<Link to='/aboutUs' className='hover:text-blue-600'>
							Biz Haqimizda
						</Link>
					</li>
					<li>
						<Link to='/contactUs' className='hover:text-blue-600'>
							Bog‘lanish 
						</Link>
					</li>
				</ul>

				<div className='hidden md:flex items-center space-x-3'>
					<button
						onClick={openDonateModal}
						className='bg-[#D75D32] text-white px-4 py-2 rounded text-sm flex items-center gap-1'
					>
						<FaHeart />
						<span>Ehson Qilish</span>
					</button>
					<Link
						to=''
						className='bg-[#DC9027] text-white px-4 py-2 rounded text-sm flex items-center gap-1'
					>
						<FaUsers />
						<span>Kongilli Bolish</span>
					</Link>
				</div>
			</div>
		</nav>
	)
}

export default Navbar
