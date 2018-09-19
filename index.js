import {Navigation} from 'react-native-navigation'

Navigation.registerComponent('momo.Main', () => require('./src/screens/Main').default)

Navigation.events().registerAppLaunchedListener(() => {
  console.log('set root to momo main')
  Navigation.setRoot({
    root: {
      component: {
        name: 'momo.Main'
      }
    }
  })
})
