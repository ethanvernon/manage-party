import React, { Component } from 'react';
import './App.css';

export class CharacterNavBar extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	//passes argument back to updateCurrentInventory or updateCurrentPersonality in Parent.js
	handleClick(name) {
		console.log(name.currentTarget.innerText);
		this.props.onClick(name.currentTarget.innerText);
		this.applyCurrentClass(name);
	}

	//applies css class "current" to current viewed tab
	applyCurrentClass(name) {
		var elements = document.getElementsByClassName("person");

		for (var i=0; i<elements.length; i++) {
			elements[i].classList.remove("current");
		}

		name.currentTarget.className = "person current";
	}

	//render function
	render() {   

		return (
		<div>
			<table className="character-header" style={{fontSize: 14, marginLeft: "auto", marginRight: "auto", userSelect:"none", marginBottom: 10}}>
				<tbody>
					<tr>
						<th className={this.props.current === "Augest" ? "current person" : "person"} onClick={this.handleClick}>Augest</th>
						<th className={this.props.current === "Kalista" ? "current person" : "person"} onClick={this.handleClick}>Kalista</th>
						<th className={this.props.current === "Kane" ? "current person" : "person"} onClick={this.handleClick}>Kane</th>
						<th className={this.props.current === "Roque" ? "current person" : "person"} onClick={this.handleClick}>Roque</th>
						<th className={this.props.current === "Urvyn" ? "current person" : "person"} onClick={this.handleClick}>Urvyn</th>
					</tr>
				</tbody>
			</table>

		</div>
		)
	}
}