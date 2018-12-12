import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import form_style from '../../styles/form.style'

class LoginForm extends Component {

  render() {
    return (

      <View>

      <TextInput style = {form_style.input}
              onTouchStart={()=>  alert("Hello...")}
              autoCapitalize="none"
              onSubmitEditing={() => this.passwordInput.focus()}
              autoCorrect={false}
              keyboardType='email-address'
              returnKeyType="next"
              placeholder='Email'
              placeholderTextColor='rgba(225,225,225,0.5)'/>

       <TextInput style = {form_style.input}
             returnKeyType="go"
             ref={(input)=> this.passwordInput = input}
             placeholder='Password'
             placeholderTextColor='rgba(225,225,225,0.5)'
             secureTextEntry/>

       <TouchableOpacity style={form_style.button}
        onPress={this.props.loginButton}>
          <Text  style={form_style.buttonText}>LOGIN</Text>
       </TouchableOpacity>

      </View>

    )
  }

}

export { LoginForm }
