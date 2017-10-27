import React, { Component } from 'react';
import {Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

class SearchRecipe extends Component {
	constructor(props){
		super(props)

		this.state = {
			ingredients: '',
			dish: ''
		}
	}
	

	search(){
		let {ingredients, dish } = this.state;
		const url = `http://www.recipepuppy.com/api/?i=${ingredients}&q=${dish}`
		console.log('this.state', this.state, 'url', url)

		fetch(url, {
			method: 'GET'
		}).then(response => response.json())
			.then(json => console.log('recipes', json));

	}

	render(){
		return(
			<div className="container"> 
			<div className="search-recipe">
				<h2>RicePad Recipe Finder</h2>
				<br/>
				<Form inline>
					<FormGroup>
						<ControlLabel>Ingredients</ControlLabel>
						<br/>
						<FormControl
							type='text' 
						    placeholder='salta, pepper, tomato'
						    onChange={event => this.setState({ingredients: event.target.value})}
						    >
						</FormControl>
					</FormGroup>
					<br/>
					<FormGroup>
						<ControlLabel>Find a dish</ControlLabel>
						<br/>
						<FormControl 
							type='text'  
							placeholder="chicken alfredo, spaghetti"
						    onChange={event =>this.setState({dish: event.target.value})}
						 >
						</FormControl>
					</FormGroup>
						<br/>

					<Button
						onClick={() => this.search()}
					>Search
					</Button>
				</Form>
			</div>
			</div>
			)
	}

}


export default SearchRecipe;