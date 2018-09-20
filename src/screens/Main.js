import React, {Component} from 'react'
import {Navigation} from 'react-native-navigation'
import {StyleSheet, View, Text, Image, Dimensions, Animated} from 'react-native'
import Expense from '../components/Expense'
import AppHeader from '../components/AppHeader'
import Menu from '../components/Menu'
import SwypeToStats from '../components/SwypeToStats'

export default class Main extends Component {
  state = {
    menu: new Animated.Value(0),
    menuOpened: false
  }

  menuClick() {
    this.state.menuOpened ?
      this.closeMenu() :
      this.openMenu()

    this.setState({ menuOpened: !this.state.menuOpened })
  }

  openMenu() {
    Animated.timing(this.state.menu, {
      toValue: 1,
      duration: 300,
    }).start()
  }

  closeMenu() {
    Animated.timing(this.state.menu, {
      toValue: 0,
      duration: 300,
    }).start()
  }

  open(name) {
    Navigation.push(this.props.componentId, {
      component: {
        name: name
      }
    })
  }

  render() {
    let {height, width} = Dimensions.get('window')

    return (
      <View style={{height: height}}>
        <AppHeader style={{zIndex: 2}} animation={this.state.menu} menuClick={() => this.menuClick()} />

        <Menu style={{...styles.menu, width: width, height: height}}
          animation={this.state.menu}
          open={(name) => this.open(name)} />

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
        <Image source={require('../assets/images/quick-add.png')} style={{position: 'absolute', width: 42, height: 42, right: 20, bottom: 30}} />
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
  menu: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1
  },
})
