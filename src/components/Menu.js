import React, {Component} from 'react'
import {StyleSheet, Text, View, Animated} from 'react-native'

export default class AppHeader extends Component {
  render() {
    return (
      <Animated.View style={{
        ...this.props.style,
        backgroundColor: 'rgb(44, 62, 80)',
        opacity: this.props.animation
      }}>
        <View style={styles.menus}>
          <Text style={styles.menuText} onPress={() => this.props.open('momo.Category')}>카테고리</Text>
          <Text style={styles.menuText}>지출 관리</Text>
          <Text style={styles.menuText}>통계 확인</Text>
          <Text style={styles.menuText}>은행사 연동</Text>
        </View>
        <Text style={{...styles.menuText, marginTop: 40}}>취소</Text>
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  menus: {
    marginTop: 110,
  },
  menuText: {
    marginLeft: 15,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 23,
  }
})
