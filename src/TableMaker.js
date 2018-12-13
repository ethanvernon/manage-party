import React, { Component } from 'react';
import './App.css';
import { CharacterNavBar } from './CharacterNavBar';

export class TableMaker extends Component {
	constructor(props) {
		super(props);
		this.makeTable = this.makeTable.bind(this);
	}

	//generates a table
	makeTable() {
		let test = ["torch", 1, "rations", 5, "sword", 1]
		let table = [];
		let count = 0;

		//outer loop to create parent
		for (let i=0;i<test.length/2;i++) {

			let children = [];

			//inner loop to create children
			for (let j=0;j<2;j++) {
				children.push(<td>{test[count]}</td>);
				count+=1;
			}			

			//Create the parent and add the children
			table.push(<tr>{children}</tr>);
		}
		
		return table;
		
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
							<td><div className="inventory-op">-</div> 5 <div className="inventory-op">+</div></td>
						</tr>
					</tbody>

				</table>

				<table>
					{this.makeTable()}
				</table>


			</div>
		)
	}


}