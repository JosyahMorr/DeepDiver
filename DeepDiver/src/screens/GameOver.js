import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated
} from 'react-native';
import {GLOBALS} from '../globals'
class GameOver extends Component {
  constructor(props){
    super(props)
    this.state = {
      offset: new Animated.Value(-100),
    }
  }
  componentDidMount() {
    this.flyIn()
  }
  flyIn() {
    this.state.offset.setValue(GLOBALS.dimensions.height)
    Animated.timing(
      this.state.offset,
      {
        toValue: ((GLOBALS.dimensions.height/2)),
        duration: 100
      }
    ).start(() => console.log('done'))
  }

  getOffset(){
    return{
      transform: [
        {translateY: this.state.offset}
      ]
    }
  }
  render() {
    return (
      <Animated.View style={[styles.container, {top: this.state.offset}]}>
        <TouchableOpacity onPress={() => {
            this.props.store.paused = false
            this.props.store.navigationState = 'HOME'
            this.props.store.resetGame()
          }}>
          <Text style={styles.text}>
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            this.props.store.paused = false
            this.props.store.resetGame()
          }}>
          <Text style={styles.text}>
            Retry
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {
            this.props.store.paused = false
            this.props.store.unPausing = true
          }}>
          <Text style={styles.text}>
            Video
          </Text>
        </TouchableOpacity>

      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: GLOBALS.dimensions.width/2,
    transform: [
      {translateX: -200},
      {translateY: -100},
    ],
    width: 400,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 15
  },
  text: {
    margin: 10,
    fontSize: 35,
    fontFamily: GLOBALS.font,
    color: '#3a9bdc'
  }
});

module.exports = GameOver;
