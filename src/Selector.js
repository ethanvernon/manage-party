import React, { Component } from 'react';
import './App.css';

export class Selector extends Component {

	//Takes the current menu title from Parent.js as a prop and renders it as string
	render() {
		return (
			<div style={{marginLeft: 10, marginRight: 10, marginBottom: 10, width:200, display:"inline-block"}}>
				{this.props.menuTitle}
			</div>
		);
	}
}
