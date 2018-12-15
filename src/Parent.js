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
import {DiceRoller} from './DiceRoller';

export class Parent extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      menuTitle: 'Proficiencies',
      currentPersonality: 'Augest',
      currentInventory: 'Augest',
      augestInventory:  ["mace", 1, "chain mail", 1, "light crossbow", 1, "crossbow bolts", 15, "shield", 1, "holy symbol", 1, "prayer book", 1, "stick of incense", 5, 
                        "vestments", 1, "common clothes", 1, "belt pouch", 1, "Gold", 15],
      kalistaInventory: ["glaive", 1, "javelin", 5, "chain mail", 1, "holy symbol", 1, "backpack", 1, "blanket", 1, "candle", 10, "tinderbox", 1, "alms box", 1, "block of incense", 1, 
                        "censer", 1, "vestments", 1, "rations", 0, "waterskin", 1],
      kaneInventory:    ["greatsword", 1, "light crossbow", 1, "crossbow bolt", 20, "scale mail", 1, "backpack", 1, "bedroll", 1, "mess kit", 1, "tinderbox", 1, "torch", 8, "rations", 6,
                        "waterskin", 1, "hempen rope", 1, "set of fine clothes", 1, "signet ring", 1, "scroll of pedigree", 1],
      roqueInventory:   ["longbow", 1, "arrows", 10, "short sword", 2, "backpack", 1, "bedroll", 1, "mess kit", 1, "tinderbox", 1, "torch", 7, "rations", 6, "waterskin", 1, "hempen rope", 1,
                        "guild letter of introduction", 1, "traveler's clothes", 1, "calligrapher's supplies", 1],
      urvynInventory:   ["staff", 1, "dagger", 1, "sling", 1, "sling bullets", 40, "arcane focus", 1, "spellbook", 1, "hunting trap", 1, "stag skull", 1, "traveler's clothes", 1, "belt pouch", 1,
                        "winter blanket", 1, "amythest ore (spent)", 1, "rituals of the Paramosits", 1]
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
      case "Kane":
        oldArray = this.state.kaneInventory;
        changeState = "kalistaInventory";
        break;
      case "Roque":
        oldArray = this.state.roqueInventory;
        changeState = "kalistaInventory";
        break;
      case "Urvyn":
        oldArray = this.state.urvynInventory;
        changeState = "kalistaInventory";
        break;
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
    let currentTable;

    switch (this.state.currentInventory) {
      case "Augest":
        currentTable = this.state.augestInventory;
        break;
      case "Kalista":
        currentTable = this.state.kalistaInventory;
        break;
      case "Kane":
        currentTable = this.state.kaneInventory;
        break;
      case "Roque":
        currentTable = this.state.roqueInventory;
        break;
      case "Urvyn":
        currentTable = this.state.urvynInventory;
        break;
    }

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
      case "Dice roller":
        page = <DiceRoller />
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
