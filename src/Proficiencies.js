import React, { Component } from 'react';
import './App.css';

export class Proficiencies extends Component {

	render() {
		return (
			<div style={{fontSize: 14}}>
			<table>
			<thead>
				<tr>
					<th className="prof-headers">Skill Name</th>
					<th className="prof-headers">Augest</th>
					<th className="prof-headers">Kalista</th>
					<th className="prof-headers">Kane</th>
					<th className="prof-headers">Roque</th>
					<th className="prof-headers">Urvyn</th>
				</tr>
			</thead>
			
			<tbody>
				<tr><td className=""><b>Acrobatics:</b></td><td></td><td></td><td>Kane (+3)</td><td></td><td></td></tr>
				<tr><td className=""><b>Arcana:</b></td><td></td><td></td><td></td><td></td><td>Urvyn (+5)</td></tr>
				<tr><td className=""><b>Athletics:</b></td><td></td><td>Kalista (+5)</td><td></td><td></td><td></td></tr>
				<tr><td className=""><b>Deception:</b></td><td></td><td>Kalista (+5)</td><td></td><td></td><td></td></tr>
				<tr><td className=""><b>History:</b></td><td>Augest (+3)</td><td></td><td>Kane (+1)</td><td></td><td></td></tr>
				<tr><td className=""><b>Insight:</b></td><td>Augest (+5)</td><td></td><td>Kane (+4)</td><td>Roque (+4)</td><td></td></tr>
				<tr><td className=""><b>Intimidation:</b></td><td></td><td>Kalista (+5)</td><td></td><td></td><td></td></tr>
				<tr><td className=""><b>Investigation:</b></td><td></td><td></td><td></td><td></td><td>Urvyn (+5)</td></tr>
				<tr><td className=""><b>Medicine:</b></td><td>Augest (+5)</td><td></td><td></td><td></td><td></td></tr>
				<tr><td className=""><b>Nature:</b></td><td></td><td></td><td></td><td>Roque (+2)</td><td></td></tr>
				<tr><td className=""><b>Perception:</b></td><td>Augest (+5)</td><td></td><td></td><td>Roque (+4)</td><td></td></tr>
				<tr><td className=""><b>Persuasion:</b></td><td></td><td>Kalista (+5)</td><td>Kane (+2)</td><td>Roque (+4)</td><td></td></tr>
				<tr><td className=""><b>Religion:</b></td><td>Augest (+3)</td><td>Kalista (+1)</td><td></td><td></td><td></td></tr>
				<tr><td className=""><b>Sleight of Hand:</b></td><td></td><td></td><td></td><td>Roque (+5)</td><td></td></tr>
				<tr><td className=""><b>Stealth:</b></td><td></td><td></td><td></td><td>Roque (+5)</td><td>Urvyn (+4)</td></tr>
				<tr><td className=""><b>Survival:</b></td><td></td><td></td><td></td><td></td><td>Urvyn (+3)</td></tr>
			</tbody>
				</table>
			</div>
		);
	}
}
