import React, { Component } from 'react';
import {Form, FormControl, FormGroup, ControlLabel, Button } from 'react-bootstrap';

class SearchRecipe extends Component {

	render(){
		return(
			<div>
				<h2>RicePad Recipe Finder</h2>
				<Form>
					<FormGroup>
						<ControlLabel>Find a dish</ControlLabel>
						<FormControl 
							type='text' 
						    placeholder="chicken alfredo, spaghetti"
						    >
						</FormControl>
					</FormGroup>
					{' '}
					<FormGroup>
						<ControlLabel>Find by ingredients</ControlLabel>
						<FormControl 
							type='text'  
							placeholder="salt, pepper, tomatoe">
						</FormControl>
					</FormGroup>
				</Form>
			</div>
			)
	}

}


export default SearchRecipe;