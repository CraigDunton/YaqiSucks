import { StackNavigator } from 'react-navigation';

import Login from './containers/Login';
import UserForm from './containers/UserForm';
import Scheduler from './containers/Scheduler';
import Matching from './containers/Matching';

const AppNavigator = new StackNavigator(

  {
    Home: { screen: Login },
    UserForm: { screen: UserForm },
    Scheduler: { screen: Scheduler},
    Matching: { screen: Matching},
  },
  {
    headerMode: 'screen',
    navigationOptions: {
      header: null,
    },
    initialRouteName: 'Home',
  },
);

export default AppNavigator;
