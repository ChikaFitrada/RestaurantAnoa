import { createMaterialTopTabNavigator } from 'react-navigation'
import { FavoriteRestoScreen } from '../favorite-resto'
import { RestorisScreen } from '../restoris'

export const MainScreenNav = createMaterialTopTabNavigator(
  {
    FavoriteResto: {
      screen: FavoriteRestoScreen,
      navigationOptions: {
        title: 'Favorite Resto'
      }
    },
    Restoris: {
      screen: RestorisScreen,
      navigationOptions: {
        title: 'Restoris'
      }
    }
  },
  {
    initialRouteName: 'Restoris'
  }
)
