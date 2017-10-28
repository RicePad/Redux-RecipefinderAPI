export const SET_RECIPES = "SET_RECIPES";
export const FAVORITE_RECIPES = "FAVORITE_RECIPES";

 export function showRecipes(items){
	const action = {
		type: SET_RECIPES,
		items
	}
	return action
}


export function favoriteRecipes(recipe){
	const action = {
		type: FAVORITE_RECIPES,
		recipe
	}
	return action
}