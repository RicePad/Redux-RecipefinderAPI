import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItems from './RecipeItems';


class RecipeList extends Component{

	render(){
		console.log('this.props from RecipeList', this.props)
		return (
			<div>
				<div>
					    <h2>List of Recipes</h2>

					{
						this.props.recipes.map((recipe, index) => {
							return(
								  <RecipeItems 
								  	recipe = {recipe}
								  	key= {index}
								   />
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