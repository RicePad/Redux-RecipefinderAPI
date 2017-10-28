import React, { Component } from 'react';
import SearchRecipe from './SearchRecipe';
import RecipeList from './RecipeList';




class App extends Component {
	render(){
		
		return(
			<div>
				<SearchRecipe />
				<RecipeList />
			</div>
			)
	}

}



export default App;