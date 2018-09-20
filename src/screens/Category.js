import React, {Component} from 'react'
import {StyleSheet, View, Text, Image, Dimensions, Animated} from 'react-native'

export default class Category extends Component {
  render() {
    let {height, width} = Dimensions.get('window')

    return (
      <View style={{width: width, height: height, backgroundColor: '#fff'}}>
        <Text>1</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  body: {
    marginLeft: 15,
  },
  expense: {
    marginTop: 25,
  },
  description: {
    marginTop: 40,
    fontSize: 16,
    color: 'rgb(94, 94, 94)',
    lineHeight: 22,
  },
})
