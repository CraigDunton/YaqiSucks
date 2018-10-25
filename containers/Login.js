import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert } from 'react-native';
import { NavigationActions } from 'react-navigation';
import verifyUser from '../helpers/verifyUser'
import { loginSuccess , loginFail } from '../actions/login'
import { connect } from 'react-redux'
import { flowRight, get } from 'lodash';

export class Login extends Component {
  constructor(props) {
  super(props);
  this.state = {
    username: "",
    password: "",
    errorMessage: ''
  };
}


  toSignUp = () => {
    this.props.navigation.navigate('UserForm');
  };

  toAddOrg = () => {
    this.props.navigation.navigate('OrgForm');
  };
  login = () => {
    var userid = -1;
    //verifyUser(email,password)
    verifyUser(this.state.username,this.state.password).then(response => {
      userid = response;
      let errorMessageActive = 'Error Logging In'

      if(!(userid > -1)){
        this.props.dispatchLoginFail();
        Alert.alert('Login Error','Incorrect email or password')
        //failed Login
      } else{
        this.props.dispatchLoginSuccess(userid);
        //successful login
        //reset the stack
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            //we navigate to matching with the param userid set so we know who logged in
            //we no longer need to do this bc redux
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
        <TextInput
        style = {styles.textBox}
        placeholder="Username"
        placeholderTextColor="#575250"
        onChangeText={(username) => this.setState({username})}
        />
        <TextInput
        style = {styles.textBox}
        placeholder="Password"
        placeholderTextColor="#575250"
        secureTextEntry={true}
        onChangeText={(password) => this.setState({password})}
        />
        <View style={styles.buttonHolder}>
          <Button onPress={this.login} title="Login"/>
          <Button onPress={this.toSignUp} title="Sign Up"/>
        </View>
        <View style = {styles.buttonStyle}>
            <Button style = {styles.buttonStyle} onPress={this.toAddOrg} title="Add Orginization"/>
        </View>
      </View>
    );
  }
}

export default connect(
  (state) => ({
    loginError: get(state, 'login.LOGIN_ERROR')
  }),
  (dispatch) => (
  {
    dispatchLoginSuccess: flowRight(dispatch , loginSuccess),
    dispatchLoginFail: flowRight(dispatch , loginFail)
  }),
  null,
  {
    withRef: true
  }
)(Login);

const styles = StyleSheet.create({
    mainContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      padding: 10,
    },
    titleContainer: {
      flex: 1,
      justifyContent: 'flex-start',
      alignItems: 'stretch',
      padding: 10,
      alignItems: 'center',
    },
    buttonHolder: {
      height: 120,
      //width: 50,
      justifyContent: 'space-evenly',
    },
    text: {
      fontSize: 32,
      marginTop: 150,
      marginBottom: 80,
    },
    errorText: {
      fontSize: 24,
      marginTop: 10,
      marginBottom: 100,
      color: 'red'
    },
    buttonStyle: {
      margin: 50,
    },
    textBox: {
      height: 40,
  },
});
