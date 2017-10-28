import React, { Component } from 'react';
import { connect } from 'react-redux';


class RecipeList extends Component{

	render(){
		console.log('this.props from RecipeList', this.props)
		return (
			<div>
				<h2>List of Recipes</h2>
				<div>
					{
						this.props.recipes.map(recipe => {
							return(
								<div>{recipe.title}</div>
								)
						})
					}
				</div>
			</div>
			)
	}
}

function mapStateToProps(state){
	return {
		recipes: state.recipes
	}
}


export default connect(mapStateToProps)(RecipeList);