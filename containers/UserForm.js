import React from 'react';
import UserForm from '../components/UserForm';
import {View, StyleSheet} from 'react-native'
import createUser from '../helpers/createUser';
import { NavigationActions } from 'react-navigation';

export default class UserFormContainer extends React.Component {

  render(){

    const { navigate } = this.props.navigation;
    const { dispatch } = this.props.navigation;

    function _onPressButton() {
      let fname = this.state.fname;
      let lname = this.state.lname;
      let password = this.state.password;
      let email = this.state.email;
      let number = this.state.number;
      let code = this.state.code;
      //console.log("Passing in: "+fname+" "+lname+" "+password+" "+email+" "+number+" "+code)
      createUser(fname,lname,password,email,number,code).then(response => {
        var userId = response;
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Scheduler', params: {userid: userId} }),
          ],
        });
        dispatch(resetAction);
      });

      //set user token = the ID of user created before dispatch

    }

    return (
      <View style={styles.container}>
        <UserForm submit={_onPressButton}/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  header: {
    flex: 2,
    backgroundColor: 'powderblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
});
