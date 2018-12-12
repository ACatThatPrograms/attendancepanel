import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, ImageBackground } from 'react-native';
import { UserButton, NavButton } from './Buttons.component';
import layout_style from '../styles/layout.style'

class Header extends Component {
  render() {
    return ( this.displayHeader() );
  }

  displayHeader() {

    if (this.props.signedIn) {
      return (
        <View style={layout_style.header}>
            <NavButton
            icon="calendar-check-o"
            navigation={this.props.navigation}/>
            <Text style={{color:'#fff'}}>Plum Dojo - {this.props.userName}</Text>
            <UserButton/>
        </View>
      );
    } else {
      return (
        <View style={layout_style.logHeader}>
            <Text style={{color:'#fff', fontSize: 14}}>Plum Dojo Login</Text>
        </View>
      );
    }
  }

}

export { Header }
