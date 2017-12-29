import { StackNavigator, NavigationActions } from 'react-navigation';
import { Alert } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import ScannerScreen from './screens/ScannerScreen';
import LoginScreen from './screens/LoginScreen';

import SaleTab from './components/SaleTab/Sales';
import SaleDetailTab from './components/SaleTab/SaleDetails';

import TabNavigation from './TabScreens/TabNavigation'

const Navigation = StackNavigator({
  LoginScreen: { screen: LoginScreen },
  HomeScreen: { screen: TabNavigation },
  ScannerScreen: { screen: ScannerScreen },

  SaleTab: { screen: SaleTab },
  SaleDetailTab: { screen: SaleDetailTab },
}, {

  });

const defaultGetStateForAction = Navigation.router.getStateForAction;

Navigation.router.getStateForAction = (action, state) => {
  if (state && action.type === NavigationActions.back &&
    state.routes[state.index].routeName === 'HomeScreen') {
    alert("Do you want exit");
    return null;
  }
  return defaultGetStateForAction(action, state);
};

export default Navigation;