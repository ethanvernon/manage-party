import React, { Component } from 'react';
import './App.css';

export class Combat extends Component {

	render() {

		return(
			<div className="row justify-content-center" style={{display:"flex", paddingTop:10}}>
				<div className="col-xs-5" style={{paddingRight:20, paddingLeft:20, paddingBottom:20}}>
					<h3>Augest</h3>
					<div style={{fontSize:14, textAlign:"left"}}>
						<b>Armor Class:</b> 18<br/>
						<b>Hit Points:</b> 11 (2d8+2 (9, 2))<br/>
						<b>Str:</b> +2, <b>Dex:</b> +0, <b>Con:</b> +1<br/>
						<b>Int:</b> +1, <b>Wis:</b> +5, <b>Cha:</b> +2
					</div>
				</div>
				<div className="col-xs-5" style={{paddingRight:20, paddingLeft:20, paddingBottom:20}}>
					<h3>Kalista</h3>
					<div style={{fontSize:14, textAlign:"left"}}>
						<b>Armor Class:</b> 15<br/>
						<b>Hit Points:</b> 13 (2d10+2 (11, 2))<br/>
						<b>Str:</b> +3, <b>Dex:</b> +0, <b>Con:</b> +1<br/>
						<b>Int:</b> -1, <b>Wis:</b> +1, <b>Cha:</b> +3
					</div>
				</div>
				<div className="col-xs-5" style={{paddingRight:20, paddingLeft:20, paddingBottom:20}}>
					<h3>Kane</h3>
					<div style={{fontSize:14, textAlign:"left"}}>
						<b>Armor Class:</b> 15<br/>
						<b>Hit Points:</b> 20 (2d10+4 (12, 8))<br/>
						<b>Str:</b> +5, <b>Dex:</b> +1, <b>Con:</b> +2<br/>
						<b>Int:</b> -1, <b>Wis:</b> +4, <b>Cha:</b> +0
					</div>
				</div>
				<div className="col-xs-5" style={{paddingRight:20, paddingLeft:20, paddingBottom:20}}>
					<h3>Roque</h3>
					<div style={{fontSize:14, textAlign:"left"}}>
						<b>Armor Class:</b> 14<br/>
						<b>Hit Points:</b> 13 (2d10+2 (11, 2))<br/>
						<b>Str:</b> +1, <b>Dex:</b> +5, <b>Con:</b> +1<br/>
						<b>Int:</b> +0, <b>Wis:</b> +2, <b>Cha:</b> +2
					</div>
				</div>
				<div className="col-xs-5" style={{paddingRight:20, paddingLeft:20, paddingBottom:20}}>
					<h3>Urvyn</h3>
					<div style={{fontSize:14, textAlign:"left"}}>
						<b>Armor Class:</b> 12<br/>
						<b>Hit Points:</b> 12 (2d6+2 (7, 5))<br/>
						<b>Str:</b> +0, <b>Dex:</b> +2, <b>Con:</b> +1<br/>
						<b>Int:</b> +5, <b>Wis:</b> +3, <b>Cha:</b> -1
					</div>
				</div>
			</div>
		)
	}
}