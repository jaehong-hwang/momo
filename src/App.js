import React, {Component} from 'react'
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native'
import Expense from './components/Expense'
import AppHeader from './components/Header'
import SwypeToStats from './components/SwypeToStats'

export default class App extends Component {
  render() {
    let {height, width} = Dimensions.get('window')

    return (
      <View style={{height: height}}>
        <AppHeader style={styles.header} />
        <View style={styles.body}>
          <Expense title="이번달 지출" price="312540" style={styles.expense} />
          <Expense title="초과 지출" price="12540" error style={styles.expense} />
          <Text style={styles.description}>
            예상한 지출을 초과하셨군요!{"\n"}
            통계를 확인하여 어떤 예상치 못한 지출이{"\n"}
            있었는지 확인 해 보세요!
          </Text>
        </View>
        <SwypeToStats style={{position: 'absolute', alignSelf: 'center', bottom: 100}} />
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
