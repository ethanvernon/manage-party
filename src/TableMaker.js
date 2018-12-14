import React, { Component } from 'react';
import './App.css';
import { CharacterNavBar } from './CharacterNavBar';

export class TableMaker extends Component {
	constructor(props) {
		super(props);
		this.makeTable = this.makeTable.bind(this);
	}

	//generates a table
	makeTable(arr) {
		let test = arr;
		let table = [];
		let count = 0;

		//outer loop to create parent
		for (let i=0;i<test.length/2;i++) {

			let children = [];

			//inner loop to create children
			for (let j=0;j<2;j++) {
				if (j===1) {
					//includes + and - sign next to quantities
					children.push(<td key={"col"+count}><div className="inventory-plus">-</div>{test[count]}<div className="inventory-minus">+</div></td>);
				} else {
					//just the item name
					children.push(<td key={"col"+count}>{test[count]}</td>);
				} 
				count+=1;
			}

			//Create the parent and add the children
			table.push(<tr key={"row"+count}>{children}</tr>);
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
				<col/>
				<col style={{width:150}}/>
				<thead><tr><th>Item name</th><th>Quantity</th></tr></thead>
					<tbody>
						{this.makeTable(this.props.currentInv)}
					</tbody>
				</table>


			</div>
		)
	}


}