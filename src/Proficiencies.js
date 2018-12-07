import React, { Component } from 'react';
import './App.css';

export class Proficiencies extends Component {

	render() {
		return (
			<div style={{fontSize: 14, marginTop:10}}>
			<table>
			<thead>
				<tr>
					<th>Skill name</th>
					<th>Augest</th>
					<th>Kalista</th>
					<th>Kane</th>
					<th>Roque</th>
					<th>Urvyn</th>
				</tr>
			</thead>
			
			<tbody>
				<tr><td><b>Acrobatics:</b></td> <td></td><td></td><td>Kane (+3)</td><td></td><td></td></tr>
				<tr><td><b>Arcana:</b></td> <td></td><td></td><td></td><td></td><td>Urvyn (+5)</td></tr>
				<tr><td><b>Athletics:</b></td><td></td> <td>Kalista (+5)</td><td></td><td></td><td></td></tr>
				<tr><td><b>Deception:</b></td> <td></td><td>Kalista (+5)</td><td></td><td></td><td></td></tr>
				<tr><td><b>History:</b></td> <td>Augest (+3)</td><td></td> <td>Kane (+1)</td><td></td><td></td></tr>
				<tr><td><b>Insight:</b></td> <td>Augest (+5)</td><td></td> <td>Kane (+4)</td> <td>Roque (+4)</td><td></td> </tr>
				<tr><td><b>Intimidation:</b></td> <td></td><td>Kalista (+5)</td><td></td><td></td><td></td></tr>
				<tr><td><b>Investigation:</b></td> <td></td><td></td><td></td><td></td><td>Urvyn (+5)</td></tr>
				<tr><td><b>Medicine:</b></td> <td>Augest (+5)</td><td></td><td></td><td></td><td></td></tr>
				<tr><td><b>Nature:</b></td> <td></td><td></td><td></td><td>Roque (+2)</td><td></td></tr>
				<tr><td><b>Perception:</b></td> <td>Augest (+5)</td><td></td><td></td> <td>Roque (+4)</td><td></td></tr>
				<tr><td><b>Persuasion:</b></td> <td></td><td>Kalista (+5)</td> <td>Kane (+2)</td> <td>Roque (+4)</td><td></td> </tr>
				<tr><td><b>Religion:</b></td> <td>Augest (+3)</td> <td>Kalista (+1)</td><td></td><td></td><td></td></tr>
				<tr><td><b>Sleight of Hand:</b></td> <td></td><td></td><td></td><td>Roque (+5)</td><td></td></tr>
				<tr><td><b>Stealth:</b></td> <td></td><td></td><td></td><td>Roque (+5)</td> <td>Urvyn (+4)</td></tr>
				<tr><td><b>Survival:</b></td> <td></td><td></td><td></td><td></td><td>Urvyn (+3)</td></tr>
			</tbody>
				</table>
			</div>
		);
	}
}
