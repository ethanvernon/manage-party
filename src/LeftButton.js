import React, { Component } from 'react';
import './App.css';

export class LeftButton extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.props.onClick("left");
	}

	render() {
		return (
			<span style={{userSelect:"none"}} onClick={this.handleClick}>
				&lt;&lt;&lt;
			</span>
		);
	}
}
