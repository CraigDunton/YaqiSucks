import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { get, flowRight } from 'lodash';
import { beginMatching } from '../actions/matching';
import { beginMet } from '../actions/met';

export class Matching extends Component {

  match() {
    this.props.dispatchMatchUser(this.props.currentUser, 'accrox');
  }

  met() {
    //call met action
    this.props.dispatchMetUser(this.props.currentUser, this.props.match.id)
    //call match action
    this.match()
  }

  _renderMatch() {
    if(!this.props.matchError && this.props.match){
      return(
        <View>
          <Text style={styles.title}>{"Here\'s your match:"}</Text>
          <View style={styles.matchContainer}>
            <Text style={styles.match}>{this.props.match.fName} {this.props.match.lName}</Text>
            <Text style={styles.match}>{this.props.match.email}</Text>
          </View>
          <Button style = {styles.buttonStyle} onPress={() => this.met()} title="We Met"/>
        </View>
      );
    } else {
      return(
        <View>
          {this._renderMatchError()}
          <Button style = {styles.buttonStyle} onPress={() => this.match()} title="Find Match"/>
        </View>
      );
    }
  }

  _renderMatchError() {
    if(this.props.matchError){
      return(
        <Text style={styles.match}>{this.props.matchError}</Text>
      );
    } else {
      return null
    }
  }

  render() {
    return (
      <View style={styles.container}>
        {this._renderMatch()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'stretch',
    },
    buttonStyle: {
      margin: 50,
    },
    title: {
      fontSize: 32,
      paddingBottom: 15,
    },
    matchContainer: {
      paddingVertical: 10,
    },
    match: {
      fontSize: 24,
      textAlign: 'center',
    },
});

export default connect(
  (state) => ({
    currentUser: get(state, 'login.userID'),
    match: get(state, 'matching.match'),
    matchError: get(state, 'matching.matchError')
  }),
  (dispatch) => ({
    dispatchMatchUser: flowRight(dispatch, beginMatching),
    dispatchMetUser: flowRight(dispatch, beginMet),
  }),
  null,
  {
    withRef: true
  }
)(Matching);
