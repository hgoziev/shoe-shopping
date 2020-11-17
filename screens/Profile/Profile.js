import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import Ionicon from 'react-native-vector-icons/Ionicons';
import Ant from 'react-native-vector-icons/AntDesign';

export default class Profile extends Component {
  state = {currentUser: null};
  componentDidMount() {
    const {currentUser} = auth();
    this.setState({currentUser});
  }

  render() {
    const {currentUser} = this.state;
    return (
      <ScrollView style={styles.scroll}>
        <ImageBackground
          style={styles.container}
          source={require('../../assets/images/skybody2.jpeg')}>
          <View style={styles.header}>
            <View style={styles.imageContaier}>
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={styles.image}
              />
            </View>

            <View style={{marginLeft: 15, marginTop: 5}}>
              <Text style={styles.name}>
                {currentUser && currentUser.email}
              </Text>

              <TouchableOpacity style={styles.edit}>
                <Text style={{color: 'rgb(34, 53, 91)', fontSize: 16}}>
                  Edit Profile
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={{
                paddingLeft: 40,
                paddingTop: 5,
              }}></TouchableOpacity>
          </View>

          <View style={styles.body}>
            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.textTouch}>Order History</Text>
              <Ionicon
                name="md-document-text-outline"
                size={22}
                style={{color: 'rgb(14, 33, 70)'}}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.textTouch}>Saved</Text>
              <Ionicon
                name="md-heart-outline"
                size={22}
                style={{color: 'rgb(14, 33, 70)'}}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.textTouch}>My Account</Text>
              <Ionicon
                name="settings-outline"
                size={22}
                style={{color: 'rgb(14, 33, 70)'}}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.textTouch}>Customer Service</Text>
              <Ionicon
                name="chatbubbles-outline"
                size={22}
                style={{color: 'rgb(14, 33, 70)'}}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.textTouch}>Rewards</Text>
              <Ionicon
                name="md-gift-outline"
                size={22}
                style={{color: 'rgb(14, 33, 70)'}}
              />
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable}>
              <Text style={styles.textTouch}>About Shoofy</Text>
              <Ionicon
                name="md-information-circle-outline"
                size={22}
                style={{color: 'rgb(14, 33, 70)'}}
              />
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'rgb(250,250,250)',
  },
  header: {
    flex: 1,
    paddingTop: 50,
    alignItems: 'flex-start',
    paddingHorizontal: 30,
    alignItems: 'center',
    marginBottom: 30,
    // backgroundColor: 'rgb(211, 239, 251)',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,

    // elevation: 10,
  },
  imageContaier: {
    borderColor: 'rgb(34, 53, 91)',
    borderWidth: 2.8,
    borderRadius: 150 / 2,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 120 / 2,
    margin: 5,
  },
  body: {
    flex: 3,
    paddingHorizontal: 30,
    marginTop: -30,
    paddingTop: 30,
    marginBottom: 30,
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 2,
    color: 'rgb(14, 33, 70)',
  },
  edit: {
    padding: 5,
    alignItems: 'center',
  },
  textTouch: {
    fontSize: 18,
    fontWeight: '700',
    color: 'rgb(14, 33, 70)',
  },
  touchable: {
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 0.8,
    borderRadius: 26,
    backgroundColor: 'white',
    borderColor: 'silver',
    paddingHorizontal: 20,
    paddingVertical: 15,
    elevation: 10,
  },
  scroll: {},
});
