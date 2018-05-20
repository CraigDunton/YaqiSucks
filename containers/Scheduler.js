import React, { Component } from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';
import { NavigationActions } from 'react-navigation';
import SelectMultiple from 'react-native-select-multiple';
import updateSched from '../helpers/updateSched';

const days = [
  {label:'Sunday', value: 0},
  {label:'Monday', value: 1},
  {label:'Tuesday', value: 2},
  {label:'Wednesday',value: 3},
  {label:'Thursday',value: 4},
  {label:'Friday',value:5},
  {label:'Saturday',value:6}
]

export default class Scheduler extends Component {

  toMatching = () => {

    var sched = "";
    var selected = [];
    const { userid } =this.props.navigation.state.params;

    //this is a terrible way to do this... I'm tired
    this.state.selectedDays.forEach(function(day){
      selected.push(day.value);
    });

    for(i=0; i<7;i++){
      if(selected.includes(i)){
        sched+="1";
      } else {
        sched+="0";
      }
    }
    console.log("sched is now: "+sched);

    updateSched(sched, userid);

    //reset the stack
    const resetAction = NavigationActions.reset({
      index: 0,
      actions: [
        NavigationActions.navigate({ routeName: 'Matching' }),
      ],
    });
    this.props.navigation.dispatch(resetAction);
    //this.props.navigation.navigate('Matching');
  };

  state = { selectedDays: [] }

  onSelectionsChange = (selectedDays) => {
    console.log("Selections changed: ", selectedDays);
    this.setState({ selectedDays })
  }

  render() {

    //const userid = this.props.navigation.state.params.userid

    return (
      <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text style={styles.text}>What days work best to meet?</Text>
        </View>
        <View style={styles.selectContainer}>
          <SelectMultiple
            items={days}
            selectedItems={this.state.selectedDays}
            onSelectionsChange={this.onSelectionsChange} />
        </View>
        <View style={styles.buttonContainer}>
          <Button
              onPress={this.toMatching}
              title="Introduce Me!"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      paddingTop: 30,
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    text: {
      fontSize: 25,
    },
    textContainer: {
      flex: 1,
      paddingBottom: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    buttonContainer: {
      flex: 2,
      paddingVertical: 20,
      paddingHorizontal: 40,
    },
    selectContainer: {
      flex: 8,
    },
});
