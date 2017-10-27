export const SET_RECIPES = "SET_RECIPES";

 export function showRecipes(items){
	const action = {
		type: SET_RECIPES,
		items
	}
	return action
}

