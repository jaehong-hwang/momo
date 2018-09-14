/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {View} from 'react-native';
import AppHeader from './src/components/Header'

export default class App extends Component {
  render() {
    return (
      <View>
        <AppHeader />
      </View>
    );
  }
}

