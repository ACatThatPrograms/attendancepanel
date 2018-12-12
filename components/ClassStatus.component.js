import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

class ClassStatus extends Component {
  constructor(props) {
    super(props);
    this.state = { lightColor: "green" };
  }

  render(){

    if (this.state.lightColor == "green") {
      return (
        <View style={{flexDirection:'row'}}>
          <Image source={require('../assets/img/bigDots/DotOff.png')}/>
          <Image style={{marginLeft:6}} source={require('../assets/img/bigDots/DotOff.png')}/>
          <Image style={{marginLeft:6}} source={require('../assets/img/bigDots/DotGreen.png')}/>
        </View>
      );
    }

    if (this.state.lightColor == "yellow") {
      return (
        <View style={{flexDirection:'row'}}>
          <Image source={require('../assets/img/bigDots/DotOff.png')}/>
          <Image style={{marginLeft:6}} source={require('../assets/img/bigDots/DotYellow.png')}/>
          <Image style={{marginLeft:6}} source={require('../assets/img/bigDots/DotOff.png')}/>
        </View>
      );
    }

    if (this.state.lightColor == "red") {
      return (
        <View style={{flexDirection:'row'}}>
          <Image source={require('../assets/img/bigDots/DotRed.png')}/>
          <Image style={{marginLeft:6}} source={require('../assets/img/bigDots/DotOff.png')}/>
          <Image style={{marginLeft:6}} source={require('../assets/img/bigDots/DotOff.png')}/>
        </View>
      );
    }

    return (
      <Text style={{fontSize:8}}>Status unavailable</Text>
    )
  }
}

export { ClassStatus }
