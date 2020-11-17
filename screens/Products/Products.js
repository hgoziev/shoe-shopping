import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
} from 'react-native';
import uuid4 from 'uuid4';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/Ionicons';
import Ficon from 'react-native-vector-icons/FontAwesome';
import Categories from './Categories';
import ProductList from './ProductList';
import Ant from 'react-native-vector-icons/AntDesign';
import Row from './Row';
import Row2 from './Row2';
import Row3 from './Row3';

export default class Products extends Component {
  state = {loggedIn: true, logo: 'power-off'};
  signOutUser = () => {
    auth()
      .signOut()
      .then(function () {
        console.log('Logged out');
      })
      .catch(function (error) {
        if (error === 'auth/no-current-user') {
          <Text>No user currently signed in.</Text>;
        }
      });
  };

  changeIcon() {
    this.setState({loggedIn: !this.state.loggedIn});
  }
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.topHeader}>
            <TouchableOpacity onPress={() => this.changeIcon()}>
              {this.state.loggedIn ? (
                <Ficon
                  name="power-off"
                  size={30}
                  color="rgb(240, 240, 240)"
                  style={{paddingTop: 8}}
                />
              ) : (
                <Ant
                  name="login"
                  size={30}
                  color="rgb(240, 240, 240)"
                  style={{paddingTop: 8}}
                />
              )}
              {/* <Ficon
                name="power-off"
                size={30}
                style={{color: 'rgb(242, 242, 242)', paddingTop: 8}}
              /> */}
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Shop')}>
              <Text style={styles.title}>Shoofy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Profile')}>
              <View style={{}}>
                <Image
                  source={require('../../assets/images/profile.jpg')}
                  style={styles.profile}
                />
              </View>
            </TouchableOpacity>
          </View>
          <KeyboardAvoidingView style={styles.searchBar} behavior="height">
            <View style={{flexDirection: 'row', marginTop: -7}}>
              <TextInput placeholder="Search" style={styles.textInput} />
              <TouchableOpacity style={styles.iconColor}>
                <Icon
                  name="md-search-outline"
                  size={10}
                  style={styles.searchIcon}
                />
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </View>

        <View style={styles.middle}>
          <Categories />
        </View>

        <View style={styles.productsList}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={styles.scroll}>
            <Row navigation={navigation} />
            <Row2 navigation={navigation} />
            <Row3 navigation={navigation} />
            <Row />
            <View>
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  marginTop: 20,
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  paddingRight: 20,
                }}>
                <Text
                  style={{
                    marginRight: 15,
                    fontSize: 18,
                    fontWeight: '700',
                    color: 'rgb(61, 43, 101)',
                  }}>
                  Next
                </Text>
                <Ficon
                  name="arrow-circle-right"
                  size={34}
                  color="rgb(0, 219, 228)"
                />
              </TouchableOpacity>
            </View>
            <View style={{marginTop: 30, alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '700',
                  marginBottom: 10,
                  color: 'rgb(61, 43, 101)',
                }}>
                ATTRIBUTION
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '600',
                  marginBottom: 20,
                  color: 'grey',
                }}>
                This app was built by Hamdamjon Goziev
              </Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    zIndex: 10,
  },
  header: {
    // marginHorizontal: 30,
    // paddingVertical: 20,
    flex: 0.8,
  },
  topHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
    backgroundColor: 'rgb(34, 177, 184)',
    paddingHorizontal: 30,
    paddingVertical: 20,

    elevation: 0,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 2,
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 12,
    margin: 2,
  },
  searchBar: {
    flex: 1,

    marginHorizontal: 30,
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'flex-start',
  },
  textInput: {
    borderRadius: 25,
    borderWidth: 0.7,
    marginHorizontal: 10,
    paddingRight: 260,
    paddingLeft: 10,
    borderColor: 'rgb(194, 194, 195)',
    paddingVertical: 5,
    backgroundColor: 'rgb(243, 243, 244)',
  },
  iconColor: {
    borderWidth: 0.5,

    marginLeft: -65,
    padding: 12,

    borderRadius: 30,
    marginVertical: 3,
    borderColor: 'white',
    backgroundColor: 'rgb(0, 219, 228)',
  },
  searchIcon: {
    color: 'white',
  },
  middle: {
    flex: 1,
    marginTop: -60,
    paddingHorizontal: 30,
  },
  productsList: {
    flex: 2,
  },
  categoriesText: {
    marginTop: 30,
    fontSize: 32,
    fontWeight: 'bold',
    color: 'rgb(101, 34, 187)',
    marginBottom: 15,
  },
  scroll: {
    marginTop: -47,
    marginBottom: 7,
    backgroundColor: 'white',
    // marginRight: 10,
  },
  // row: {
  //   flex: 1,
  //   flexDirection: 'row',
  //   elevation: 10,
  // },
  // cart: {
  //   backgroundColor: 'white',
  //   flex: 1,
  //   // padding: 40,
  //   borderRadius: 20,
  //   marginLeft: 30,
  //   elevation: 10,
  //   marginBottom: 10,
  //   marginTop: 5,
  //   width: 150,
  //   height: 165,
  // },
});
