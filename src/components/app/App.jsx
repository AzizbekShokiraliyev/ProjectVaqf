import Footer from '../footer/Footer'
import EighthMain from '../main/eighthMain/EighthMain'
import FifthMain from '../main/fifthMain/FifthMain'
import FirstMain from '../main/firstMain/FirstMain'
import FourtMain from '../main/fourthMain/FourthMain'
import NinthMain from '../main/ningthMain/NinthMain'
import SecondMain from '../main/secondMain/SecondMain'
import SeventhMain from '../main/seventhMain/SeventhMain'
import SixthMain from '../main/sixthMain/SixthMain'
import ThirdMain from '../main/thirdMain/ThirdMain'
import Navbar from '../navbar/NavBar'

const App = () => {
	return (
		<div>
			<Navbar />
			<FirstMain />
			<SecondMain />
			<ThirdMain />
			<FourtMain />
			<FifthMain />
			<SixthMain />
			<SeventhMain />
			<EighthMain />
			<NinthMain />
			<Footer />
		</div>
	)
}

export default App
