import React from 'react';
import ReactDOM from 'react-dom'
import App from '../components/App';
import FavoriteRecipeList from '../components/FavoriteRecipeList';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// Redux Setup
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../reducers';


const store = createStore(reducers);
// console.log('store.getState()', store.getState())
store.subscribe(() => console.log('store', store.getState()));



const recipeFinder = document.getElementById('recipe-finder')

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={App} />
				<Route path='/favorites' component={FavoriteRecipeList} />
			</Switch>
		</BrowserRouter>
	</Provider>, recipeFinder
	)