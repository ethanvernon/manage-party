import React, { Component } from 'react';
import './App.css';
import {Header} from './Header';
import {Selector} from './Selector';
import {LeftButton} from './LeftButton';
import {RightButton} from './RightButton';
import {Proficiencies} from './Proficiencies';
import {Personalities} from './Personalities';
import {Combat} from './Combat';
import {Inventory} from './Inventory';

export class Parent extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      menuTitle: 'Proficiencies',
      currentPersonality: 'Augest',
      currentInventory: 'Augest',
      augestInventory:  ["mace", 1, "chain mail", 1, "light crossbow", 1, "crossbow bolts", 1, "shield", 1, "holy symbol", 1, "prayer book", 1, "stick of incense", 5, 
                        "vestments", 1, "common clothes", 1, "belt pouch", 1, "Gold", 15],
      kalistaInventory: ["glaive", 1, "javelin", 5, "chain mail", 1, "holy symbol", 1, "backpack", 1, "blanket", 1, "candle", 10, "tinderbox", 1, "alms box", 1, "block of incense", 1, 
                        "censer", 1, "vestments", 1, "rations", 2, "waterskin", 1]
    };

    this.changeTitle = this.changeTitle.bind(this);
    this.updateCurrentPersonality = this.updateCurrentPersonality.bind(this);
    this.updateCurrentInventory = this.updateCurrentInventory.bind(this);
    this.changeInventory = this.changeInventory.bind(this);
  }



  //Takes argument from LeftButton.js and RightButton.js and passes new heading to Selector.js
  //Updates state for menuTitle
  changeTitle(direction) {

    var change = (direction === "left") ? -1 : 1;
    var titles = ["Proficiencies", "Dice roller", "Personalities", "Inventory", "Combat"];
    var x;
    var newTitle;

    for (x=0; x <= titles.length; x++) {
      if (titles[x] === this.state.menuTitle) {
        if (x === 0 && change === -1) {
          newTitle = titles[titles.length-1]
        } else if (x===titles.length-1 && change === 1) {
          newTitle = titles[0];
        }
        else {
          newTitle = titles[x+change];
        }
        
      }
    }

    this.setState({
      menuTitle: newTitle
    });
  }


  //Update current personality state. takes argument from Personalities.js
  updateCurrentPersonality(name) {
    this.setState({
      currentPersonality: name
    })
  }

  updateCurrentInventory(name) {
    this.setState({
      currentInventory: name
    })
  }

  changeInventory(character, operation, placeInArray) {

    let oldArray;
    let changeState;

    //decide which state/inventory to modify based on value of character argument
    switch (character) {
      case "Augest":
        oldArray = this.state.augestInventory;
        changeState = "augestInventory";
        break;
      case "Kalista":
        oldArray = this.state.kalistaInventory;
        changeState = "kalistaInventory";
        break;
      /*case "Kane":
        oldArray = this.state.kaneInventory;
        break;
      case "Roque":
        oldArray = this.state.roqueInventory;
        break;
      case "Urvyn":
        oldArray = this.state.urvynInventory;
        break;*/
    }

    //if subtraction
    if (operation) {

      //only change value if greater than 0
      if (oldArray[placeInArray] > 0) {
        oldArray[placeInArray] -= 1;
        this.setState({
          changeState: oldArray
        }) 
      }
    } //changes with addition
    else {      
      oldArray[placeInArray] += 1;
      this.setState({
        changeState: oldArray
      })
    }
    

  }



  render() {
    let page;
    let currentTable = this.state.currentInventory == "Augest" ? this.state.augestInventory : this.state.kalistaInventory;

    //renders appropriate menu depending on this.state.menuTitle
    switch (this.state.menuTitle) {
      case "Proficiencies":
        page = <Proficiencies />;
        break;
      case "Personalities":
        page = <Personalities 
          onClick = {this.updateCurrentPersonality}
          current = {this.state.currentPersonality}/>;
        break;
      case "Combat":
        page = <Combat />;
        break;
      case "Inventory":
        page = <Inventory 
          onClick = {this.updateCurrentInventory}
          current = {this.state.currentInventory}
          currentInv = {currentTable}
          onChange = {this.changeInventory}/>;
        break;
    }


    return (
      <div id="main">
        <Header />
        <LeftButton           
          onClick = {this.changeTitle}/>
        <Selector 
          menuTitle = {this.state.menuTitle} />
        <RightButton 
          onClick = {this.changeTitle}/>
        {page}

          
      </div>
      );
  }
}
