import React, { Component } from 'react';
import './App.css';

export class Selector extends Component {

	render() {
		return (
			<div style={{marginLeft: 10, marginRight: 10, width:200, display:"inline-block"}}>
				{this.props.menuTitle}
			</div>
		);
	}
}
