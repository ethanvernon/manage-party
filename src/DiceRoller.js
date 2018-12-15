import React, { Component } from 'react';
import './App.css';

export class DiceRoller extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		console.log("form was clicked");
		console.log(document.getElementById("numberOf").value);
		console.log(document.getElementById("diceType").value);

		let num = document.getElementById("numberOf").value;
		let type = document.getElementById("diceType").value;
		let results = [];

		if (parseInt(num)==num && parseInt(type) == type) {
			console.log("both are integers");

			for (let i=0; i<num; i++) {
				results.push(Math.floor(Math.random()*type)+1);
			}

			console.log(results);


		}
	}


	render() {
		return(
			<div>
			<form>
			<input id="numberOf" type="text" maxlength="3" defaultValue="1" style={{width:50, textAlign:"center"}}></input>
			<span style={{paddingRight:5, paddingLeft:5}}>D</span>
			<input id="diceType" type="text" maxlength="3" defaultValue="20" style={{width:50, textAlign:"center"}}></input>
			<input type="button" name="submit" value="Roll!" style={{marginLeft:10}} onClick={this.handleSubmit}/>
			</form>
			<br />
			<textarea name="runningtotal" cols="25" rows="10" style={{fontSize:12}}></textarea>
			</div>
		)
	}

}