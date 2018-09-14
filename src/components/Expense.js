/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class AppHeader extends Component {
  render() {
    let styleObj = {
      title: {
        fontSize: 16,
        color: 'rgb(51, 51, 51)',
      },
      price: {
        fontSize: 36,
        fontWeight: 'bold',
        color: 'rgb(52, 73, 94)',
      }
    }

    if (this.props.error) {
      styleObj.price.color = 'rgb(192, 57, 43)'
    } else if (this.props.primary) {
      styleObj.price.color = 'rgb(41, 128, 185)'
    }

    const styles = StyleSheet.create(styleObj)

    return (
      <View style={this.props.style}>
        <Text style={styles.title}>{this.props.title}</Text>
        <Text style={styles.price}>{Number(this.props.price).toLocaleString('ko-KR')} 원</Text>
      </View>
    )
  }
}
