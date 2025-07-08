import { Route, Routes } from 'react-router-dom'
import Footer from '../footer/Footer'
import Main from '../main/Main'
import NinthMain from '../main/ningthMain/NinthMain'
import Navbar from '../navbar/Navbar'
import WaterCrisis from '../pages/waterCrisis/WaterCrisis'

const App = () => {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/waterCrisis' element={<WaterCrisis />} />
			</Routes>
			<NinthMain />
			<Footer />
		</div>
	)
}

export default App
