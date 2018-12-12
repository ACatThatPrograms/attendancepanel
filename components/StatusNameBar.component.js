import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import name_bar_style from '../styles/name_bar.style';
import { FontAwesome } from '@expo/vector-icons';

class StatusNameBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      userArray: []
    }
  }

  componentDidMount() {

    this.setState({
      userArray: this.props.dataSet.users
    }, () => {
      this.setState({
        isLoading: false
      })
    })

  }

  render(){

    const rank_images = {
      TKD_white: require('../assets/img/ranks/TKD_white.png'),
      TKD_white_yellow_stripe: require('../assets/img/ranks/TKD_white_yellow_stripe.png'),
      TKD_yellow: require('../assets/img/ranks/TKD_yellow.png'),
      TKD_yellow_green_stripe: require('../assets/img/ranks/TKD_yellow_green_stripe.png'),
      TKD_green: require('../assets/img/ranks/TKD_green.png'),
      TKD_green_blue_stripe: require('../assets/img/ranks/TKD_green_blue_stripe.png'),
      TKD_blue: require('../assets/img/ranks/TKD_blue.png'),
      TKD_blue_red_stripe: require('../assets/img/ranks/TKD_blue_red_stripe.png'),
      TKD_red: require('../assets/img/ranks/TKD_red.png'),
      TKD_red_black_stripe: require('../assets/img/ranks/TKD_red_black_stripe.png'),
      TKD_black_1: require('../assets/img/ranks/TKD_black_1.png'),
    };

    if (this.state.isLoading) {
      return (
        <View>
          <Text> Loading Users... </Text>
        </View>
      );
    }

    else {

      const bars = this.state.userArray.map((user) =>

      <View key={user.id} style={name_bar_style.name_bar}>
        <View style={name_bar_style.rank_block}>
          <Image source={rank_images[user.rank]}/>
        </View>
        <View style={name_bar_style.name_block}>
          <Text>{user.name}</Text>
        </View>
        <View style={name_bar_style.status_block}>
          {this.getStatus(user.status)}
        </View>
      </View>

      );

      return (

        <View>{bars}</View>

      )

    }

  }

  getStatus(statusID) {

    const dot_type = {
      empty: require('../assets/img/smallDots/smallDotEmpty.png'),
      red: require('../assets/img/smallDots/smallDotRed.png'),
      yellow: require('../assets/img/smallDots/smallDotYellow.png'),
      green: require('../assets/img/smallDots/smallDotGreen.png')
    }

    if (statusID == 0) {
      return (
        <View style={name_bar_style.status_lights}>
          <Image source={dot_type['red']}/>
        </View>
      )
    }
    if (statusID == 1) {
      return (
        <View style={name_bar_style.status_lights}>
          <Image source={dot_type['yellow']}/>
        </View>
      )
    }
    if (statusID == 2) {
      return (
        <View style={name_bar_style.status_lights}>
          <Image source={dot_type['green']}/>
        </View>
      )
    }
  }

}

export { StatusNameBar }
