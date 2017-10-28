import { combineReducers } from 'redux';
import recipes from './recipes_reducer.jsx'
import favoriteRecipes from './favorite_recipes_reducer.jsx'


export default combineReducers({
	recipes,
	favoriteRecipes

});