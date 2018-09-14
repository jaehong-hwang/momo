/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react'
import {StyleSheet, View, Text, Dimensions} from 'react-native'
import Expense from './src/components/Expense'
import AppHeader from './src/components/Header'

export default class App extends Component {
  render() {
    return (
      <View style={styles.absolute}>
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
        <View>
          <Text style={styles.more}>아래로 넘겨서 통계 확인</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  header: {
    width: width,
  },
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
  more: {
    fontSize: 16,
    color: 'rgb(94, 94, 94)',
  }
})
