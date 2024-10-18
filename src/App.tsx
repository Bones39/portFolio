import './App.css'
import Navbar from './components/Navbar/Navbar'
import Logo from './components/Logo/Logo'

function App() {

  return (
  <div className='app-container'>
		<div id='logo'>
			<Logo></Logo>
		</div>
		<nav id='navBar'>
			<Navbar></Navbar>
		</nav>
		<div id='main1'>Main 1</div>
		<div id='main2'>Main 2</div>
	</div>

  )
}

export default App
