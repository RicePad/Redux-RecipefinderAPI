import { FAVORITE_RECIPES } from '../actions'

export default function favorite(state = [], action){
	switch(action.type){
		case FAVORITE_RECIPES:
			state = [...state, action.recipe]
			return state
		default: 
			return state
	}
}



