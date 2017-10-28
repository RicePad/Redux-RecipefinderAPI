import React, { Component } from 'react';



class RecipeItems extends Component {

	render(){
		console.log('this.props from RecipeItems', this.props)
		let recipe = this.props.recipe
		
		return (
				<div className="recipe-item">

					<div className="recipe-text">
						<a href={recipe.href}>
							<h4>{recipe.title}</h4>{' '}
						</a>	
						<p>{recipe.ingredients}</p>
					</div>
					<img 
						src={recipe.thumbnail}
						alt={recipe.title}
						className="recipe-img"
					/>
				</div>
			)
	}


}



export default RecipeItems;