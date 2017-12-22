import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {observer} from 'mobx-react/native';
import {GLOBALS} from '../globals';
import PropTypes from 'prop-types';
import Matter from 'matter-js'
import {Sprite} from 'react-game-kit/native';
import {getOpacity} from '../utils/getOpacity'
@observer
class Coin extends Component {
  constructor(props){
    super(props)
    store = this.props.store
    this.state = {
      index: this.props.index,
    }
  }
  componentWillUnmount(){
    this.setState({mounted: false})
  }

  componentWillMount(){
    this.setState({mounted: true})
  }
  getPosition() {
      // console.log('Position',this.props.position.x)
      return {
        left: 1000+this.props.position.x*4,
        bottom: this.props.position.y,
        opacity: this.state.opacity,
        transform: [
          {translateY: this.props.store.background.position.y},
          {translateX: this.props.store.background.position.x},
        ],
        height: 25,
        width: 25,
        backgroundColor: (this.state.collided ? 'red' : 'transparent'),

      }
  }
  render() {
    return (
      <Image
        source={require('../images/Coin.png')}
        style={this.state.mounted ? this.getPosition() : console.log('false')}
        />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

module.exports = Coin;