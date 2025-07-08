import { useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Footer from '../footer/Footer'
import Main from '../main/Main'
import NinthMain from '../main/ningthMain/NinthMain'
import Navbar from '../navbar/Navbar'
import AboutUs from '../pages/aboutUS/AboutUs'
import ContactUs from '../pages/contactUS/ContactUs'
import DonateModal from '../pages/donate/Donate'
import WaterCrisis from '../pages/waterCrisis/WaterCrisis'

const App = () => {
	const [isDonateModalOpen, setDonateModalOpen] = useState(false)
	const location = useLocation()

	const handleOpenDonateModal = () => setDonateModalOpen(true)
	const handleCloseDonateModal = () => setDonateModalOpen(false)

	return (
		<div>
			<Navbar openDonateModal={handleOpenDonateModal} />
			<Routes location={location}>
				<Route path='/' element={<Main />} />
				<Route path='/waterCrisis' element={<WaterCrisis />} />
				<Route path='/contactUs' element={<ContactUs />} />
				<Route path='/aboutUs' element={<AboutUs />} />
			</Routes>

			<NinthMain />
			<Footer />

			{isDonateModalOpen && (
				<DonateModal
					isOpen={isDonateModalOpen}
					onClose={handleCloseDonateModal}
				/>
			)}
		</div>
	)
}

export default App
