import React, { Component } from 'react';
import './App.css';
import { CharacterNavBar } from './CharacterNavBar';

export class TableMaker extends Component {
	constructor(props) {
		super(props);
	}

	//generates a table
	makeTable() {


	}

	//render function
	render() {

		return(
			<div>
				<CharacterNavBar 
					onClick = {this.props.onClick}
	          		current = {this.props.current}/>

				<table style={{tableLayout:"fixed", width:500}}>
					<thead>
						<tr>
							<th>Item name</th>
							<th>Quantity</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Torches</td>
							<td>- 5 +</td>
						</tr>
					</tbody>

				</table>


			</div>
		)
	}


}