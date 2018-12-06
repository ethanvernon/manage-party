import React, { Component } from 'react';
import './App.css';
import {Header} from './Header';
import {Selector} from './Selector';
import {LeftButton} from './LeftButton';
import {RightButton} from './RightButton';
//import { Child } from './Child';
//import { Sibling } from './Sibling';

export class Parent extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      menuTitle: 'Proficiencies'
    };
    this.changeTitle = this.changeTitle.bind(this);
  }


  changeTitle(direction) {

    var change = (direction === "left") ? -1 : 1;
    var titles = ["Proficiencies", "Gear"];
    var x;
    var newTitle;

    for (x=0; x <= titles.length; x++) {
      if (titles[x] === this.state.menuTitle) {
        if (x === 0 && change === -1) {
          newTitle = titles[titles.length-1]
        } else {
          newTitle = titles[x+change];
        }
        
      }
    }

    console.log(titles.length);

    this.setState({
      menuTitle: newTitle
    });
  }



  render() {
    return (
      <div id="main">
        <h1 style={{ marginBottom:0}}>
          <Header />
        </h1>
        <LeftButton           
          onClick = {this.changeTitle}/>
        <Selector 
          menuTitle = {this.state.menuTitle} />
        <RightButton />
          
      </div>
      );
  }
}
