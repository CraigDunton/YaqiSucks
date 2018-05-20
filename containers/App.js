import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { BackHandler } from 'react-native';
import { NavigationActions, addNavigationHelpers } from 'react-navigation/src/react-navigation';
import { connect } from 'react-redux';
import AppNavigator from '../navigator';

@connect(
  state => ({
    nav: state.nav,
  }),
  dispatch => ({ dispatch }),
)
export default class AppWithNavigationState extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    nav: PropTypes.object.isRequired,
  };

  componentDidMount() {
    // this.backHandler = BackHandler.addEventListener('backPress', () => {
    //   console.log("backpress");
    //   this.props.dispatch(NavigationActions.back());
    //   goBack(null);
    //   return true;
    // });
  }

  componentWillUnmount() {
    // this.backHandler.remove();
  }

  render() {
    // const { dispatch, nav } = this.props;
    // this.backHandler = BackHandler.addEventListener('backPress', () => {
    //
    //   //this.props.dispatch(NavigationActions.back());
    //   goBack(null);
    //   return true;
    // });
    //<AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
    return <AppNavigator />;
  }
}
