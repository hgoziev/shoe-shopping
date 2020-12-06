import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import auth from '@react-native-firebase/auth';

export default class Login extends Component {
  constructor() {
    super();
    this.state = {email: '', password: '', errorMessage: null};
  }

  handleLogin = () => {
    const {email, password} = this.state;

    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => this.props.navigation.navigate('TabStack'))
      .catch((error) => this.setState({errorMessage: error.message}));
  };

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('../../assets/images/another.png')}>
        <View style={{flex: 1}} />
        <View style={styles.inputPart}>
          <Text style={styles.text}>Welcome Back </Text>
          {this.state.errorMessage && (
            <Text style={{color: 'red'}}>{this.state.errorMessage}</Text>
          )}

          <TextInput
            style={styles.input}
            placeholder="Email or Phone Number"
            underlineColorAndroid="rgb(246, 247, 250)"
            placeholderTextColor="rgb(115, 115, 115)"
            onChangeText={(email) => this.setState({email})}
            value={this.state.email}
          />

          <TextInput
            placeholder="Password"
            underlineColorAndroid="rgb(246, 247, 250)"
            secureTextEntry
            style={[styles.input, styles.inputPas]}
            placeholderTextColor="rgb(115, 115, 115)"
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />

          <TouchableOpacity
            style={styles.signupButtonContainer}
            onPress={this.handleLogin}>
            <Text style={styles.signText}>Login</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', paddingTop: 15}}>
            <Text
              style={{color: 'rgb(69, 71, 70)', fontSize: 14, marginRight: 7}}>
              New member ?
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SignUp')}>
              <Text style={styles.textLogin}>Sign up</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    );
  }
}
