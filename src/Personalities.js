import React, { Component } from 'react';
import './App.css';
import {Augest} from './Augest';

export class Personalities extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	//passes argument back to updateCurrentPersonality in Parent.js
	handleClick(name) {
		console.log(name.currentTarget.innerText);
		this.props.onClick(name.currentTarget.innerText);
	}

	render() {

		 let page;


	    //renders appropriate menu depending on this.state.menuTitle

	    console.log("current page is " + JSON.stringify(this.props.current));
	    switch (this.props.current) {
	      case "Augest":
	        page = <Augest />;
	        break;
	    }

		return (
		<div>
			<table id="personality-header" style={{fontSize: 14, marginTop:10, marginLeft: "auto", marginRight: "auto", userSelect:"none"}}>
				<tbody>
					<tr>
						<th onClick={this.handleClick}>Augest</th>
						<th onClick={this.handleClick}>Kalista</th>
						<th onClick={this.handleClick}>Kane</th>
						<th onClick={this.handleClick}>Roque</th>
						<th onClick={this.handleClick}>Urvyn</th>
					</tr>
				</tbody>
			</table>

			{page}

		</div>
		)
	}
}