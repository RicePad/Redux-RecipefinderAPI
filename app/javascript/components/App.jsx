import React, { Component } from 'react';
import SearchRecipe from './SearchRecipe';
import RecipeList from './RecipeList';
import FavoriteRecipeList from './FavoriteRecipeList';




class App extends Component {
	render(){
		
		return(
			<div>
				<SearchRecipe />
				<RecipeList />
				<FavoriteRecipeList />

			</div>
			)
	}

}



export default App;