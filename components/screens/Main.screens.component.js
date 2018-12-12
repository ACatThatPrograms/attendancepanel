import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, ImageBackground, KeyboardAvoidingView } from 'react-native';
import { Header } from '../Header.component.js'
import { ClassStatus } from '../ClassStatus.component';
import { StatusNameBar } from '../StatusNameBar.component';
import { AttendanceButton_Yes, AttendanceButton_No, UserButton } from '../Buttons.component';
import { LoginForm } from '../loginComponents/Form.component';
import layout_style from '../../styles/layout.style';

class MainScreen extends Component {
    constructor(props) {
      super(props)
      this.state = {
        signedIn: false,
        dataSet: [],
      }
    }

    componentDidMount() {

      this._refreshData().done();

    }

    async _refreshData() {

      const response = await fetch('http://192.168.1.2:57555')
      const json = await response.json();

      const data = json;

      this.setState({dataSet: data});

    }

    static navigationOptions = ({ navigation }) => {
      const {state, setParams} = navigation;
      return {
        header: <Header
        navigation={navigation}
        signedIn={navigation.getParam('signedIn')}
        userName={navigation.getParam('userName')}/>
      };
    }

    render(){

      return(

        <ImageBackground source={require('../../assets/img/bg.jpg')} style={layout_style.img_bg_wrap}>

          {this.state.signedIn ? (

            <View style={layout_style.body}>
                <View style={layout_style.body_block}>
                  <View style={layout_style.body_block_header}>
                    <Text style={{fontSize:20}}>Class Status</Text>
                    <Text style={{fontSize:12}}>Wednesday, Nov. 7th</Text>
                    <View style={layout_style.class_status_lights}>
                      <ClassStatus/>
                    </View>
                  </View>
                  <View style={layout_style.body_block_body}>
                    <View style={layout_style.body_block_status_body_top}>
                      <Text style={{fontSize:16,textAlign:'center'}}>Attending?</Text>
                      <AttendanceButton_Yes attendanceState={this.state.attendanceState} _shiftStatus={this._shiftStatus}/>
                      <AttendanceButton_No attendanceState={this.state.attendanceState} _shiftStatus={this._shiftStatus}/>
                    </View>
                    <ScrollView style={layout_style.body_block_status_body_bottom}>
                      <StatusNameBar data={this.props.navigation} refreshData={this._refreshData} dataSet={this.state.dataSet}/>
                    </ScrollView>
                  </View>
              </View>
            </View>

          ) : (

            <KeyboardAvoidingView behavior="padding" style={layout_style.login_block}>
              <View style={layout_style.login_title}>
                <Image resizeMode="contain" style={layout_style.login_img} source={require('../../assets/img/logo.png')}/>
              </View>
              <View style={layout_style.login_form_wrap}>
                <LoginForm loginButton={this._onLoginPress}/>
              </View>
            </KeyboardAvoidingView>
          )}

        </ImageBackground>
      )
    }

    _onLoginPress = () => {
      this.setState({
        signedIn: true
      });
      this.props.navigation.setParams({
        signedIn: true,
        userName: "Adam Gibbons",
        photoUrl: "TestPhotoUrl",
        rank: "TKD_black_1",
        attendanceState: 2,
      })
      console.log("Login Press!");
    }

    _onLogoutPress = () => {
      this.setState({
        signedIn: false
      });
      this.props.navigation.setParams({
        signedIn: false,
        userName: "",
        photoUrl: ""
      })
      console.log("Logout Press!");
    }

    _onShiftStatus = () => {

    }

  }

  export { MainScreen }
