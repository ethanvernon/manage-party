import React, { Component } from 'react';
import './App.css';

export class RightButton extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	//Passes argument back to changeTitle in Parent.js whenever the right arrow in the menu is clicked
	handleClick() {
		this.props.onClick("right");
	}

	render() {
		return (
			<span style={{userSelect:"none"}} onClick={this.handleClick}>
				&gt;&gt;&gt;
			</span>
		);
	}
}
