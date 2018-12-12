import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, ImageBackground, TouchableHighlight } from 'react-native';
import { Header } from '../Header.component.js'
import layout_style from '../../styles/layout.style'


class NavigationScreen extends Component {

  static navigationOptions = ({ navigation }) => {
    const {state, setParams} = navigation;
    return {
      header: <Header
      navigation={navigation.state.params.navigation}
      signedIn={navigation.state.params.navigation.getParam('signedIn')}
      userName={navigation.state.params.navigation.getParam('userName')}/>
    };
  }

  onPressStatus = () => {
    this.props.navigation.navigate('Home')
  }

  onPressMessages = () => {
    this.props.navigation.navigate('Messaging')
  }

  onPressResources = () => {
    this.props.navigation.navigate('Resources')
  }

  onPressLogout = () => {
    this.props.navigation.navigate('Home', {signedIn: false});
  }

  render() {

    return (

      <View style={layout_style.body}>
        <View style={layout_style.body_block}>
          <TouchableHighlight onPress={this.onPressStatus} underlayColor='red' style={layout_style.nav_link_line}><Text style={{fontSize:16}}>Class Status</Text></TouchableHighlight>
          <TouchableHighlight onPress={this.onPressMessages} underlayColor='red' style={layout_style.nav_link_line}><Text style={{fontSize:16}}>Messages</Text></TouchableHighlight>
          <TouchableHighlight onPress={this.onPressResources} underlayColor='red' style={layout_style.nav_link_line}><Text style={{fontSize:16}}>Student Resources</Text></TouchableHighlight>
          <TouchableHighlight onPress={this.onPressLogout} underlayColor='red' style={layout_style.nav_link_line}><Text style={{fontSize:16}}>Log Out</Text></TouchableHighlight>
        </View>
      </View>

    )
  }

}

export { NavigationScreen }
