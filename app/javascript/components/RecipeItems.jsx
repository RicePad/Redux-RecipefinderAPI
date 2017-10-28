import React, { Component } from 'react';



class RecipeItems extends Component {

	render(){
		console.log('this.props from RecipeItems', this.props)
		let recipe = this.props.recipe
		return (
				<div>
					<h4>{recipe.title}</h4>{' '}
					<p>{recipe.ingredients}</p>
				</div>
			)
	}


}



export default RecipeItems;