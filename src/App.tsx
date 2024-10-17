import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button, Grid, GridItem } from '@chakra-ui/react'
import Navbar from './components/Navbar/Navbar'
import Logo from './components/Logo'

function App() {

  return (
    // <Grid templateAreas={
	// 		{
	// 			lg:`"logo nav nav" "main1 main2 main2"`,
	// 			base: `"nav" "main1" "main2"`
	// 		}
	// 	}
	// 	/* templateColumns={
	// 		{
	// 			lg: `'30% 70%' '1fr 1fr'`
	// 		}
	// 	} */
	// 	>
	// 	<GridItem area='logo' bg='coral'>
	// 		<Logo></Logo>
	// 	</GridItem>
	// 	<GridItem area='nav' bg='red'>
	// 		<Navbar></Navbar>
	// 	</GridItem>
	// 	<GridItem area='main1' bg='blue'>main 1</GridItem>
	// 	<GridItem area='main2' bg='green'>main 2</GridItem>
	// </Grid>
	<div className='app-container'>
		<div id='logo'>Logo</div>
		<nav id='navBar'>
			<Navbar></Navbar>
		</nav>
		<div id='main1'>Main 1</div>
		<div id='main2'>Main 2</div>
	</div>

  )
}

export default App
