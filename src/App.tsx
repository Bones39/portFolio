import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Button, Grid, GridItem } from '@chakra-ui/react'

function App() {

  return (
    <Grid templateAreas={
			{
				lg:`"nav nav" "main1 main2"`,
				base: `"nav" "main1" "main2"`
			}
		}>
		<GridItem area='nav' bg='coral'>Nav</GridItem>
		<GridItem area='main1' bg='blue'>main 1</GridItem>
		<GridItem area='main2' bg='green'>main 2</GridItem>
	</Grid>
  )
}

export default App
