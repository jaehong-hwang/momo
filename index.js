import {Navigation} from 'react-native-navigation'

Navigation.registerComponent('momo.Main', () => require('./src/screens/Main').default)
Navigation.registerComponent('momo.Category', () => require('./src/screens/Category').default)

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setDefaultOptions({
    topBar: {
      visible: false
    }
  })

  Navigation.setRoot({
    root: {
      stack: {
        id: 'App',
        children: [
          {
            component: {
              name: 'momo.Main'
            }
          }
        ],
      }
    }
  })
})
