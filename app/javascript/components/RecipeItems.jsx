import React, { Component } from 'react';
import { connect } from 'react-redux';
import { favoriteRecipes } from '../actions';



class RecipeItems extends Component {
	constructor(props){
		super(props);

		this.state = {
      		favorited: false
		}
	}

	starred(recipe){
		 this.props.favoriteRecipes(recipe);		
		 this.setState(() => {favorited: true});

	}
	render(){
		// console.log('this.props from RecipeItems', this.props)
		let recipe = this.props.recipe
		
		return (
				<div className="recipe-item">
				
				  
					{
				          this.props.favoriteButton ?
				            this.state.starred ?
				              <div className="star">&#9733;</div>
				            :
				              <div 
				                className="star"
				                onClick={() => this.starred(recipe)}
				              >
				                &#9734;
				              </div>
				          :
				            <div></div>
				      
				        }

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


 
export default connect(null, { favoriteRecipes })(RecipeItems);