import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { MainScreen, NavigationScreen, MessagingScreen, ResourcesScreen } from './components/screens/Screens.hub.component'
import StackViewStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator";

import layout_style from './styles/layout.style'

const RootStack = createStackNavigator(
  {
    Home: MainScreen,
    Navigation: NavigationScreen,
    Messaging: MessagingScreen,
    Resources: ResourcesScreen,
  },
  {
    initialRouteName: 'Home',
    headerMode: 'float',
    navigationOptions: {
      header: null,
    },
    transitionConfig: () => ({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal
    })
  }
);


export default class PlumPanel extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
        <RootStack/>
    );
  }
}

AppRegistry.registerComponent('PlumPanel', () => PlumPanel);
