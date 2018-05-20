import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';

export default class Matching extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>This is the Matching Screen</Text>
        <Text>Whole lotta stuff gonna go down here</Text>
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
