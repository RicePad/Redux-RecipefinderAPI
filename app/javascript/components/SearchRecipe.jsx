import React, { Component } from 'react';
import {Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

class SearchRecipe extends Component {

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
						    >
						</FormControl>
					</FormGroup>
					<br/>
					<FormGroup>
						<ControlLabel>Find a dish</ControlLabel>
						<br/>
						<FormControl 
							type='text'  
							placeholder="chicken alfredo, spaghetti">
						</FormControl>
					</FormGroup>
						<br/>

					<Button>Search</Button>
				</Form>
			</div>
			</div>
			)
	}

}


export default SearchRecipe;