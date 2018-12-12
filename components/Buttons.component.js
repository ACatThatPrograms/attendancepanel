import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import button_styles from '../styles/buttons.style';
import { FontAwesome } from '@expo/vector-icons';

class AttendanceButton_Yes extends Component {
  constructor(props) {
    super(props);
    this.state = { isPressed: false};
  }

  render(){
    return (
      <TouchableHighlight
      style={button_styles.attendance_button}>
        <FontAwesome name="calendar-check-o" size={32} color="black" />
      </TouchableHighlight>
    )
  }
}

class AttendanceButton_No extends Component {
  constructor(props) {
    super(props);
    this.state = { isPressed: false};
  }

  onPress = () => {
    console.log("Hi No");
    this.setState({
      isPressed: true
    })
    this.props._shiftStatus(0);
  }

  render(){
    return (
      <View>
        {this.state.isPressed ? (
          <TouchableHighlight style={[button_styles.attendance_button,{backgroundColor:'#FF9D9D'}]} onPress={this.onPress} underlayColor='#FF9D9D'>
            <FontAwesome name='calendar-times-o' size={32} color="black" />
          </TouchableHighlight>
        ) : (
          <TouchableHighlight style={button_styles.attendance_button} onPress={this.onPress} underlayColor='#FF9D9D'>
            <FontAwesome name='calendar-times-o' size={32} color="black" />
          </TouchableHighlight>
        )}
      </View>

    )
  }
}

class NavButton extends Component {

  onPress = () => {
    this.props.navigation.navigate('Navigation', {navigation: this.props.navigation});
  }

  render(){
    return (
      <TouchableHighlight style={button_styles.nav_button} onPress={this.onPress} underlayColor='white'>
        <FontAwesome name='bars' size={21} color="white" />
      </TouchableHighlight>
    );
  }
}

class UserButton extends Component {
  render(){
    return (
      <View style={button_styles.user_button}>
        <FontAwesome name='user-circle' size={42} color="white" />
      </View>
    );
  }
}

export { AttendanceButton_Yes, AttendanceButton_No, NavButton, UserButton }
