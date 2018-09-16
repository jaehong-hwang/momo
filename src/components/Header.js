import React, {Component} from 'react'
import {StyleSheet, Text, View} from 'react-native'

export default class AppHeader extends Component {
  render() {
    return (
      <View style={[styles.container, this.props.style]}>
        <Text style={styles.title}>MoMo</Text>
        <View style={styles.hamberger}>
          <View style={styles.hambergerItem} />
          <View style={styles.hambergerItem} />
          <View style={styles.hambergerItem} />
        </View>
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
    color: 'rgb(51, 51, 51)',
  },
  hamberger: {
    marginTop: 17,
    marginRight: 15,
  },
  hambergerItem: {
    marginBottom: 5,
    width: 23,
    height: 2,
    backgroundColor: 'rgb(0, 0, 0)'
  }
})
