import React, { Component } from 'react';
import './App.css';

export class Selector extends Component {

	render() {
		return (
			<span>
				{this.props.menuTitle}
			</span>
		);
	}
}
