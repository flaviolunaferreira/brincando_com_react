import React, { Component } from 'react';
import '../css/btnMenu.css';

class BtnOpcoes extends Component {
  render() {
    const nomeBtn = this.props.name;
    return (
    <button className='btnMenu'>{nomeBtn}</button>
    );
  }
}

export default BtnOpcoes;
