import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import { get } from 'lodash';

export class Matching extends Component {
  
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Matching Screen</Text>
        <Text> User: {this.props.currentUser} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    }
});

export default connect(
  (state) => ({
    currentUser: get(state, 'login.userID')
  }),
  (dispatch) => ({}),
  null, 
  {
    withRef: true
  }
)(Matching);