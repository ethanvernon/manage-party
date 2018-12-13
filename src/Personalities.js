import React, { Component } from 'react';
import './App.css';
import {Augest} from './Augest';
import {Kalista} from './Kalista';
import {Kane} from './Kane';
import {Roque} from './Roque';
import {Urvyn} from './Urvyn';
import {CharacterNavBar} from './CharacterNavBar';

export class Personalities extends Component {

	//renders a CharacterNavBar and the appropriate character info based on this.props.current
	//this.props.current is equal to Parent.js this.state.currentPersonality
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