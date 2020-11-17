import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  ActivityIndicator,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons//FontAwesome';

const {width, height} = Dimensions.get('window');
export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errorMessage: null,
      name: '',
      spinner: false,
    };
  }

  handleSignUp = () => {
    auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('TabStack'))
      .catch((error) => this.setState({errorMessage: error.message}));
  };

  render() {
    return (
      <ImageBackground
        style={styles.container}
        source={require('../../assets/images/nikeb3.jpg')}>
        <View style={{flex: 1}}></View>

        <View style={styles.inputPart}>
          <Text style={styles.text}>Create Account </Text>
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
            onPress={this.handleSignUp}>
            <Text style={styles.signText}>Sign up</Text>
          </TouchableOpacity>

          <View style={{flexDirection: 'row', paddingTop: 15}}>
            <Text style={{color: 'grey', fontSize: 14, marginRight: 7}}>
              Already have an account ?
            </Text>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}>
              <Text style={styles.textLogin}>Log in</Text>
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
    backgroundColor: 'rgb(252, 252, 252)',
  },
  inputPart: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 35,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: 'rgb(237, 237, 237)',
    justifyContent: 'flex-start',
    // paddingTop: 20,
    opacity: 0.84,
  },
  text: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'rgb(0, 190, 190)',
    borderRadius: 10,

    marginBottom: 40,
    paddingHorizontal: 10,
    paddingTop: 45,
  },

  input: {
    marginTop: 8,
    justifyContent: 'flex-start',
    borderWidth: 1,
    borderRadius: 22,
    borderColor: 'rgb(200, 200, 200)',
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
    borderColor: 'rgb(211, 239, 251)',
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 25,
  },
  textLogin: {
    color: 'rgb(39, 197, 197)',
    fontSize: 17,
    fontWeight: 'bold',
  },
});
