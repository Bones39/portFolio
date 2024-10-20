import './App.css'
import Navbar from './components/Navbar/Navbar'
import Logo from './components/Logo/Logo'
import DescriptionContainer from './components/DescriptionContainer/DescriptionContainer'

function App() {

  return (
  <div className='app-container'>
		<div id='logo'>
			<Logo></Logo>
		</div>
		<nav id='navBar'>
			<Navbar></Navbar>
		</nav>
		<div id='main1'>
			<DescriptionContainer></DescriptionContainer>
		</div>
		<div id='main2'>Main 2</div>
	</div>

  )
}

export default App
