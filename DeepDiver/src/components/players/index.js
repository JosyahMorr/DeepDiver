import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {observer} from 'mobx-react/native';
import { Body , Sprite} from 'react-game-kit/native';
import SeaLord from './SeaLord';
import CommanderTurtle from './CommanderTurtle';
import Aquaria from './Aquaria';
import Matter from 'matter-js';
import {topToBottom} from '../../utils/converter'
import {GLOBALS} from '../../globals'
@observer
class Player extends Component {
  render() {
    {
      switch(GLOBALS.player.type){
        case 'SEA_LORD':
          return (
            <SeaLord
              store={this.props.store}
              />
          )
        case 'AQUARIA':
          return (
            <Aquaria
              store={this.props.store}
              />
          )
        case 'COMMANDER_TURTLE':
          return (
            <CommanderTurtle
              store={this.props.store}
              />
          )
        default:
          return (
            <SeaLord
              store={this.props.store}
              />
          )
      }
    }
  }
}

module.exports = Player;
