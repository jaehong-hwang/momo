import React, {Component} from 'react'
import {Animated, Easing, StyleSheet, Text, Image} from 'react-native'

export default class SwypeToStats extends Component {

  state = {
    animated: new Animated.Value(0)
  }

  componentDidMount() {
    this.runAnimation()
  }
  
  runAnimation() {
    this.state.animated.setValue(0)
    Animated.timing(this.state.animated, {
        toValue: 1,
        easing: Easing.bezier(0,.8,.84,-0.1),
        duration: 2500,
    }).start(() => setTimeout(() => this.runAnimation(), 1500))
  }

  render() {
    return (
      <Animated.View style={{
        ...this.props.style,
        opacity: this.state.animated.interpolate({
          inputRange: [0, 1],
          outputRange: [1.5, 0],
        }),
        transform: [
          {
            translateY: this.state.animated.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 20],
            })
          }
        ]
      }}>
        <Text style={styles.swypeText}>아래로 넘겨서 통계 확인</Text>
        <Image
          style={{width: 17, height: 17, alignSelf: 'center', marginTop: 5}}
          source={require('../assets/images/arrow-2bottom.png')}
        />
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  swypeText: {
    fontSize: 16,
    color: 'rgb(94, 94, 94)',
  },
})
