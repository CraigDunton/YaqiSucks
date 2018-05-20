import React from 'react';
import UserForm from '../components/UserForm';
import {StyleSheet, Text, TextInput, Button, View} from 'react-native'
import createOrg from '../helpers/createOrg';
import { NavigationActions } from 'react-navigation';


export default class UserFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orgCode: "",
      orgName: ""
    };
  }

  _onPressButton() {
    let orgCode = this.state.orgCode;
    let orgName = this.state.orgName;
    alert(this.state.orgName)

    //console.log("Passing in: "+fname+" "+lname+" "+password+" "+email+" "+number+" "+code)
    createOrg(orgCode , orgName).then(response => {
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Home'}),
        ],
      });
      this.props.navigation.dispatch(resetAction);
    });
  };

  render(){

    const { navigate } = this.props.navigation;
    const { dispatch } = this.props.navigation;

    function _onPressButtonSafe() {
      let orgCode = this.state.orgCode;
      let orgName = this.state.orgName;
      //console.log("Passing in: "+fname+" "+lname+" "+password+" "+email+" "+number+" "+code)
      createOrg(orgCode , orgName).then(response => {
        const resetAction = NavigationActions.reset({
          index: 0,
          actions: [
            NavigationActions.navigate({ routeName: 'Home'}),
          ],
        });
        dispatch(resetAction);
      });

      //set user token = the ID of user created before dispatch

    }

    return (
      <View style={styles.container}>
        <TextInput 
        style = {styles.textBox}
        placeholder="Add Code"
        placeholderTextColor="#575250" 
        onChangeText={(orgCode) => this.setState({orgCode})}
        />
        <TextInput 
        style = {styles.textBox}
        placeholder="Add Name"
        placeholderTextColor="#575250" 
        onChangeText={(orgName) => this.setState({orgName})}
        />
        <Button onPress={() => this._onPressButton()} title="Submit Orginization"/>
      </View>
    )
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
    textBox: {
    height: 80,
  },
});
