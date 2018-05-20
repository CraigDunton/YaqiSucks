import React from 'react';
import { Alert, StyleSheet, Text, TextInput, Button, View } from 'react-native';
import { AppRegistry, Image } from 'react-native';

export default class UserForm extends React.Component {
  constructor(props) {
    super(props);

    //don't think this is needed
    this.state = { text: "placeholder",
                    fname: "",
                    lname: "",
                    password: "",
                    email: "",
                    number: "",
                    code: ""
                    };
    this._onPressButton = props.submit;
    this._onPressButton = this._onPressButton.bind(this);
  }

  render() {
    return (
    <View style={styles.container}>
          <View style={styles.header}>
            <Text style={{fontSize:30}}>Welcome to IntroduceMe</Text>
          </View>
          <View style={styles.inputs}>
            <TextInput
                style={styles.textBox}
                placeholder="First Name"
                placeholderTextColor="#575250"
                autoCapitalize="words"
                onChangeText={(fname) => this.setState({fname})}
                value={this.state.fname}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Last Name"
                placeholderTextColor="#575250"
                autoCapitalize="words"
                onChangeText={(lname) => this.setState({lname})}
                lname={this.state.lname}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Password"
                placeholderTextColor="#575250"
                autoCapitalize="none"
                secureTextEntry={true}
                onChangeText={(password) => this.setState({password})}
                password={this.state.password}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Email"
                placeholderTextColor="#575250"
                keyboardType="email-address"
                autoCapitalize="none"
                onChangeText={(email) => this.setState({email})}
                email={this.state.email}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Phone Number"
                placeholderTextColor="#575250"
                keyboardType="numeric"
                onChangeText={(number) => this.setState({number})}
                number={this.state.number}
            />
            <TextInput
                style={styles.textBox}
                placeholder="Org Code"
                placeholderTextColor="#575250"
                autoCapitalize="none"
                onChangeText={(code) => this.setState({code})}
                code={this.state.code}
            />
          </View>
          <View style={styles.bottomContainer}>
            <View style={styles.buttonContainer}>
                <Button
                    onPress={this._onPressButton}
                    title="Next"
                />
             </View>
          </View>
      </View>
    );
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
  },
  inputs: {
    flex: 8,
    backgroundColor: 'skyblue',
    alignItems: 'stretch',
    justifyContent: 'center',
    padding: 10,
  },
  textBox: {
    height: 80,
  },
  bottomContainer: {
    flex: 2,
    backgroundColor: 'steelblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
  }
});
