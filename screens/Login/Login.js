import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ImageBackground,
} from 'react-native';
import auth from '@react-native-firebase/auth';
const {width, height} = Dimensions.get('window');

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -20,
  },
  inputPart: {
    marginTop: 10,
    flex: 2,
    alignItems: 'center',

    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: 'rgb(242, 242, 242)',
    justifyContent: 'flex-start',
    paddingTop: 40,
    opacity: 0.84,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'rgb(0, 200, 210)',
    borderRadius: 10,
    marginBottom: 60,
    paddingHorizontal: 10,
    paddingTop: 20,
    opacity: 1,
  },
  image: {
    width: 60,
    height: 80,
    paddingVertical: 80,
    paddingHorizontal: 90,
    marginHorizontal: 15,
  },
  imageEx: {
    paddingHorizontal: 105,
  },
  input: {
    marginTop: 8,
    justifyContent: 'flex-start',
    borderWidth: 0.5,
    borderRadius: 22,
    borderColor: 'rgb(175, 176, 181)',
    backgroundColor: 'white',
    paddingLeft: 14,
    paddingRight: 70,
    paddingVertical: 5,
    paddingHorizontal: 20,
    elevation: 5,
  },
  inputPas: {
    paddingRight: 150,
  },
  signText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  signupButtonContainer: {
    marginTop: 25,
    backgroundColor: 'rgb(0, 222, 233)',
    borderWidth: 0.5,
    borderColor: 'rgb(175, 176, 181)r',
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 25,
    elevation: 10,
  },
  textLogin: {
    color: 'rgb(0, 200, 210)',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
