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

				<table style={{tableLayout:"fixed", width:500, fontSize:14}}>
					<thead>
						<tr>
							<th>Item name</th>
							<th>Quantity</th>
						</tr>
					</thead>

					<tbody>
						<tr>
							<td>Torches</td>
							<td><div style={{textAlign:"center", display:"inline-block", width:"33%", marginLeft: "auto", marginRight:"auto"}}>-</div> 5 <div style={{textAlign:"center", display:"inline-block", width:"33%", marginLeft: "auto", marginRight:"auto"}}>+</div></td>
						</tr>
					</tbody>

				</table>


			</div>
		)
	}


}