import React, { Component } from 'react';
import './App.css';
import {Header} from './Header';
import {Selector} from './Selector';
import {LeftButton} from './LeftButton';
import {RightButton} from './RightButton';
import {Proficiencies} from './Proficiencies';
import {Personalities} from './Personalities';
import {Combat} from './Combat';
import {TableMaker} from './TableMaker';

export class Parent extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      menuTitle: 'Proficiencies',
      currentPersonality: 'Augest'
    };

    this.changeTitle = this.changeTitle.bind(this);
    this.updateCurrentPersonality = this.updateCurrentPersonality.bind(this);
  }



  //Takes argument from LeftButton.js and RightButton.js and passes new heading to Selector.js
  //Updates state for menuTitle
  changeTitle(direction) {

    var change = (direction === "left") ? -1 : 1;
    var titles = ["Proficiencies", "Gear", "Dice roller", "Personalities", "Combat", "Inventory"];
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



  render() {
    let page;


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
        page = <TableMaker />;
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
