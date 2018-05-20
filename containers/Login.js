import React, { Component } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { NavigationActions } from 'react-navigation';
import verifyUser from '../helpers/verifyUser'

export default class Login extends Component {

  toSignUp = () => {
    this.props.navigation.navigate('UserForm');
  };

  login = () => {
    var userid = -1;
    //verifyUser(email,password)
    verifyUser("craig@email.com","password").then(response => {
      userid = response;

      if(!(userid > -1)){
        //failed Login
      } else{
        //successful login
        //reset the stack
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            //we navigate to matching with the param userid set so we know who logged in
            NavigationActions.navigate({ routeName: 'Matching',params: {userid: userid} }),
          ],
        });
        this.props.navigation.dispatch(resetAction);
      }

    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>This is the Login Screen</Text>
        <View style={styles.buttonHolder}>
          <Button onPress={this.login} title="Sucessful login"/>
          <Button onPress={this.toSignUp} title="Sign Up"/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      padding: 10,
    },
    buttonHolder: {
      height: 120,
      //width: 50,
      justifyContent: 'space-evenly',
    },
    text: {
      fontSize: 32,
      marginTop: 150,
      marginBottom: 100,
    }
});
