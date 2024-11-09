import './App.css'
import Navbar from './components/Navbar/Navbar'
import Logo from './components/Logo/Logo'
import DescriptionContainer from './components/DescriptionContainer/DescriptionContainer'
import ProfilPicture from './components/ProfilPicture/ProfilPicture'
import CardContainer from './components/CardContainer/CardContainer'
import ProjectHeader from './components/ProjectHeader/ProjectHeader'
import CardList from './components/CardList/CardList'

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
		<div id='main2'>
			<ProfilPicture></ProfilPicture>
		</div>
		<div id="projectsAndSkills">
			<span>Project and skill</span>
			<ProjectHeader></ProjectHeader>
			<CardList></CardList>
		</div>
	</div>

  )
}

export default App
