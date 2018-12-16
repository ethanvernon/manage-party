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
		var resultsArr = [];
		resultsArr.push(document.getElementById("resultsBox").innerHTML);

		if (parseInt(num)==num && parseInt(type) == type) {
			console.log("both are integers");

			for (let i=0; i<num; i++) {
				results.push(Math.floor(Math.random()*type)+1);
			}

			console.log(results);

			results.unshift("<br/>");
			resultsArr.unshift(results);
			console.log(resultsArr);
			document.getElementById("resultsBox").innerHTML = resultsArr.join("");

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
			<div id="resultsBox" name="runningtotal" style={{fontSize:12}}></div>
			</div>
		)
	}

}