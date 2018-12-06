import React, { Component } from 'react';
import './App.css';
import {Header} from './Header';
import {Selector} from './Selector';
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


  changeTitle(newTitle) {
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
        <Selector 
          menuTitle = {this.state.menuTitle} />
          
      </div>
      );
  }
}
