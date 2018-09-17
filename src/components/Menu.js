import React, {Component} from 'react'
import {StyleSheet, Text, View, Animated, TouchableWithoutFeedback} from 'react-native'

export default class AppHeader extends Component {
  render() {
    let color = this.props.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgba(44, 62, 80, 0)', 'rgba(44, 62, 80, 1)']
    })

    return (
      <Animated.View style={{
          ...styles.container,
          ...this.props.style,
          backgroundColor: color
        }}>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 55,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    marginTop: 15,
    marginLeft: 15,
    fontSize: 21,
    fontWeight: 'bold',
  },
  hamberger: {
    marginTop: 17,
    marginRight: 15,
  },
  hambergerItem: {
    marginBottom: 5,
    width: 23,
    height: 2,
  }
})
