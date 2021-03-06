import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {observer} from 'mobx-react/native';
import CoinLayout from './CoinLayout';
@observer
class MapCoins extends Component {
  constructor(props){
    super(props);
    store = this.props.store;
  }
  render() {
    return (
      <View>
        {
          store.coinLayoutArray.slice().map((eachEnemy, index) => {
            if(store.coinLayoutArray.length != 0){
              return (
                <CoinLayout
                  key={index}
                  index={index}
                  position={store.coinLayoutArray[index].position}
                  store={store}
                  distanceAway={15}
                  background={store.background}
                  />
              );
            }
        }
      )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  },
});

module.exports = MapCoins;
