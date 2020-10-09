import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Onboading from 'react-native-onboarding-swiper';
import {withNavigation} from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

const {width, height} = Dimensions.get('window');

const Next = ({...props}) => (
  <TouchableOpacity
    {...props}
    style={{
      paddingRight: 17,
      paddingLeft: 17,
      marginBottom: 20,
      borderWidth: 0.5,
      borderColor: 'silver',
      backgroundColor: 'rgb(0, 222, 233)',
      padding: 8,
      elevation: 5,
      marginRight: 15,
      borderRadius: 22,
    }}>
    <Text style={{fontSize: 20, fontWeight: '700', color: 'white'}}>
      Get Started
    </Text>
  </TouchableOpacity>
);

const Done = ({...props}) => (
  <TouchableOpacity
    {...props}
    style={{
      marginBottom: 20,
      marginRight: 15,
      borderWidth: 1,
      borderColor: 'rgb(0, 222, 233)',
      backgroundColor: 'rgb(0, 222, 233)',
      paddingVertical: 8,
      paddingHorizontal: 24,
      borderRadius: 26,
      elevation: 10,
    }}>
    <Text style={{fontSize: 20, fontWeight: '700', color: 'white'}}>
      Explore
    </Text>
  </TouchableOpacity>
);

const Dots = ({selected}) => {
  let bg;
  bg = 'white';

  return (
    <View
      style={{
        width: 8,
        height: 8,
        borderRadius: 10,
        marginBottom: 15,
        marginHorizontal: 3,
        backgroundColor: bg,
      }}
    />
  );
};

function Welcome({navigation}) {
  return (
    <Onboading
      onDone={() => navigation.navigate('SignUp')}
      bottomBarHeight={80}
      bottomBarHighlight={false}
      DotComponent={Dots}
      DoneButtonComponent={Done}
      showSkip={false}
      titleStyles={{
        fontSize: 27,
        fontWeight: 'bold',
        marginTop: -10,
        color: 'rgb(0, 0, 0)',
      }}
      subTitleStyles={{fontSize: 16, color: 'rgb(37, 37, 37)'}}
      pages={[
        {
          backgroundColor: 'white',
          image: (
            <Image
              source={require('../../assets/images/transparent/Shoofy.png')}
              style={{width: 400}}
            />
          ),
          title: '',
          subtitle: '',
        },
      ]}
    />
  );
}

export default Welcome;
