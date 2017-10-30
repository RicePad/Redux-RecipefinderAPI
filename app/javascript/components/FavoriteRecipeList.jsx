import React, { Component } from 'react';
import { connect } from 'react-redux';
import RecipeItems from './RecipeItems';


class FavoriteRecipeList extends Component {

	render(){
		return(
			<div>
				<h4>Favorite Recipe List</h4>
				{
					this.props.favoriteRecipes.map((recipe, index) => {
						return(
							<RecipeItems key={index} recipe={recipe} favoriteButton={false} />
							)
					})



				}
			</div>
				)

	}
}


function mapStateToProps(state){
	return{
		favoriteRecipes: state.favoriteRecipes
	}
}

export default connect(mapStateToProps)(FavoriteRecipeList);