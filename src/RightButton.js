import React, { Component } from 'react';
import './App.css';

export class RightButton extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

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
