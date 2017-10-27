import React, { Component } from 'react';
import {Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { showRecipes } from '../actions';

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
      .then(json => {
        this.props.showRecipes(json.results)
      });

	}

	render(){
		return(
			<div className="container"> 
			<div className="search-recipe">
				<h2>RicePad Recipe Finder</h2>
				<br/>
				<Form inline>
					<FormGroup>
						<div className="ctrl-label"><ControlLabel>Ingredients</ControlLabel></div>
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
						<div className="ctrl-label"><ControlLabel>Find a dish</ControlLabel></div>
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



export default connect(null, { showRecipes })(SearchRecipe);