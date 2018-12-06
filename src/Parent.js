import React, { Component } from 'react';
import './App.css';
//import { Child } from './Child';
//import { Sibling } from './Sibling';

export class Parent extends Component {
  
  /*constructor(props) {
    super(props);
    this.state = {
      form: 'Medium'
    };
    this.changeForm = this.changeForm.bind(this);
  }*/


  //passed to Child as prop
  //updates this.state.modStrength, this.dexStrength, this.form whenever size changes
  /*changeForm(newForm, newStrength, newDex, newSizeModAA, newSizeModCMBD, newMAB, naturalArmor, newSizeMod) {

    const dexMod = Math.floor((newDex-10)/2);
    const strMod = Math.floor((newStrength-10)/2);

    this.setState({
      form: newForm,
      modStrength: newStrength,
      modDex: newDex,
      modAA: newSizeModAA,
      modCMBD: newSizeModCMBD,
      modMAB: newMAB,
      meleeDamage: strMod,
      meleeDamageSecondary: strMod < 0 ? strMod : Math.floor(strMod/2),
      CMB: newSizeModCMBD + (newForm == "Tiny" || newForm == "Dimunitive" ? dexMod : strMod) + this.state.bab,
      CMD: 10 + newSizeModCMBD + strMod + dexMod + this.state.bab,
      naturalArmor: naturalArmor,      
      armorClass: 10 + newSizeModAA + dexMod + naturalArmor + this.state.ringBonus + this.state.barkskin + this.state.mageArmor,
      touchAC: 10 + newSizeModAA + dexMod + this.state.ringBonus,
      flatfootAC: 10 + newSizeModAA + naturalArmor + this.state.ringBonus + (dexMod < 0 ? dexMod : 0) + this.state.barkskin + this.state.mageArmor,
      modInit: dexMod + this.state.initBonus,      
      refSave: this.state.resBonus + this.state.refBase + dexMod,
      skillsSizeMod: newSizeMod
    });
  }
  */



  render() {
    return (
      <div id="main">      
        
          
          Party manager
          
      </div>
      );
  }
}
