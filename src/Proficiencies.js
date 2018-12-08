import React, { Component } from 'react';
import './App.css';

export class Proficiencies extends Component {

	render() {
		return (
			<div style={{fontSize: 14, marginTop:10}}>
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
				<tr><td className="prof-headers"><b>Acrobatics:</b></td> <td></td><td></td><td>Kane (+3)</td><td></td><td></td></tr>
				<tr><td className="prof-headers"><b>Arcana:</b></td> <td></td><td></td><td></td><td></td><td>Urvyn (+5)</td></tr>
				<tr><td className="prof-headers"><b>Athletics:</b></td><td></td> <td>Kalista (+5)</td><td></td><td></td><td></td></tr>
				<tr><td className="prof-headers"><b>Deception:</b></td> <td></td><td>Kalista (+5)</td><td></td><td></td><td></td></tr>
				<tr><td className="prof-headers"><b>History:</b></td> <td>Augest (+3)</td><td></td> <td>Kane (+1)</td><td></td><td></td></tr>
				<tr><td className="prof-headers"><b>Insight:</b></td> <td>Augest (+5)</td><td></td> <td>Kane (+4)</td> <td>Roque (+4)</td><td></td> </tr>
				<tr><td className="prof-headers"><b>Intimidation:</b></td> <td></td><td>Kalista (+5)</td><td></td><td></td><td></td></tr>
				<tr><td className="prof-headers"><b>Investigation:</b></td> <td></td><td></td><td></td><td></td><td>Urvyn (+5)</td></tr>
				<tr><td className="prof-headers"><b>Medicine:</b></td> <td>Augest (+5)</td><td></td><td></td><td></td><td></td></tr>
				<tr><td className="prof-headers"><b>Nature:</b></td> <td></td><td></td><td></td><td>Roque (+2)</td><td></td></tr>
				<tr><td className="prof-headers"><b>Perception:</b></td> <td>Augest (+5)</td><td></td><td></td> <td>Roque (+4)</td><td></td></tr>
				<tr><td className="prof-headers"><b>Persuasion:</b></td> <td></td><td>Kalista (+5)</td> <td>Kane (+2)</td> <td>Roque (+4)</td><td></td> </tr>
				<tr><td className="prof-headers"><b>Religion:</b></td> <td>Augest (+3)</td> <td>Kalista (+1)</td><td></td><td></td><td></td></tr>
				<tr><td className="prof-headers"><b>Sleight of Hand:</b></td> <td></td><td></td><td></td><td>Roque (+5)</td><td></td></tr>
				<tr><td className="prof-headers"><b>Stealth:</b></td> <td></td><td></td><td></td><td>Roque (+5)</td> <td>Urvyn (+4)</td></tr>
				<tr><td className="prof-headers"><b>Survival:</b></td> <td></td><td></td><td></td><td></td><td>Urvyn (+3)</td></tr>
			</tbody>
				</table>
			</div>
		);
	}
}
