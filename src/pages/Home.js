import React from 'react'
import CocktailList from '../components/CocktailList'
import SearchForm from '../components/SearchForm'
import Randomizer from '../components/Randomizer'

const Home = () => {
  return (
		<main>
			<SearchForm />
			<Randomizer />
			<CocktailList />
		</main>
	);
}

export default Home
