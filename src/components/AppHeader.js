import React, {Component} from 'react'
import {StyleSheet, Text, View, Animated, TouchableWithoutFeedback} from 'react-native'

export default class AppHeader extends Component {
  render() {
    let color = this.props.animation.interpolate({
      inputRange: [0, 1],
      outputRange: ['rgb(0, 0, 0)', 'rgb(255, 255, 255)']
    })

    return (
      <View style={{...styles.container, ...this.props.style}}>
        <Animated.Text style={{
          ...styles.title,
          color: color
        }}>MoMo</Animated.Text>
        <TouchableWithoutFeedback onPress={this.props.menuClick}>
          <View style={styles.hamberger}>
            <Animated.View style={{
              ...styles.hambergerItem,
              transform: [
                {
                  translateY: this.props.animation.interpolate({
                    inputRange: [0, .5, 1],
                    outputRange: [0, 7, 7]
                  })
                },
                {
                  rotate: this.props.animation.interpolate({
                    inputRange: [0, .5, 1],
                    outputRange: ['0deg', '0deg', '45deg']
                  })
                }
              ],
              backgroundColor: color
            }} />
            <Animated.View style={{
              ...styles.hambergerItem,
              transform: [
                {
                  rotate: this.props.animation.interpolate({
                    inputRange: [0, .5, 1],
                    outputRange: ['0deg', '0deg', '45deg']
                  })
                }
              ],
              backgroundColor: color
            }} />
            <Animated.View style={{
              ...styles.hambergerItem,
              transform: [
                {
                  translateY: this.props.animation.interpolate({
                    inputRange: [0, .5, 1],
                    outputRange: [0, -7, -7]
                  })
                },
                {
                  rotate: this.props.animation.interpolate({
                    inputRange: [0, .5, 1],
                    outputRange: ['0deg', '0deg', '-45deg']
                  })
                }
              ],
              backgroundColor: color
            }} />
          </View>
        </TouchableWithoutFeedback>
      </View>
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
