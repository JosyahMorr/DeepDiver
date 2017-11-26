import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import LevelContainer from './LevelContainer';
class LevelsLayout extends Component {
  render() {
    return (
      <View style={styles.wrapper}>
        <View style={styles.title}>
          <Text>
            Levels Layout Component
          </Text>
        </View>
        <ScrollView
        horizontal={true}
        style={styles.scrollView}
        >
          <View style={styles.container}>
            <View style={styles.horizontalLevelContainer}>
              <LevelContainer init={1} levels={5} store={this.props.store}/>
              <LevelContainer init={6} levels={5} store={this.props.store}/>
            </View>
          </View>
          <View style={styles.container}>
            <View style={styles.horizontalLevelContainer}>
              <LevelContainer init={11} levels={5} store={this.props.store}/>
              <LevelContainer init={16} levels={5} store={this.props.store}/>
            </View>

          </View>
        </ScrollView>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3a9bdc',
    paddingLeft: 10
  },
  container: {
    alignItems: 'center',
  },
  horizontalLevelContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  scrollView: {
    flex: 20,
  },
  title: {
    flex: .1,
  }
});

module.exports = LevelsLayout;
