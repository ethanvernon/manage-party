import React, { Component } from 'react';
import './App.css';
import {Augest} from './Augest';
import {Kalista} from './Kalista';
import {Kane} from './Kane';
import {Roque} from './Roque';
import {Urvyn} from './Urvyn';
import {CharacterNavBar} from './CharacterNavBar';

export class Personalities extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	//passes argument back to updateCurrentPersonality in Parent.js
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

		let page;


	    //renders appropriate personality info depending on this.props.current
	    switch (this.props.current) {
	      case "Augest":
	        page = <Augest />;
	        break;
	      case "Kalista":
	      	page = <Kalista />;
	      	break;
	      case "Kane":
	      	page = <Kane />;
	      	break;
	      case "Roque":
	      	page = <Roque />;
	      	break;
	      case "Urvyn":
	      	page = <Urvyn />;
	      	break;
	    }

		return (
		<div>
			<CharacterNavBar 
				onClick = {this.props.onClick}
          		current = {this.props.current}/>

			{page}

		</div>
		)
	}
}