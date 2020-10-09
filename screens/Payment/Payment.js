import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Payment({navigation}) {
  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.top}>
        <Text style={styles.topText}>Address</Text>
      </View>

      <KeyboardAvoidingView style={styles.body}>
        <TextInput
          placeholder="Street name"
          style={styles.input}
          placeholderTextColor="rgb(90, 90, 90)"
        />
        <TextInput
          placeholder="Street name2"
          style={styles.input}
          placeholderTextColor="rgb(90, 90, 90)"
        />
        <TextInput
          placeholder="City"
          style={styles.input}
          placeholderTextColor="rgb(90, 90, 90)"
        />
        <TextInput
          placeholder="State or Region"
          style={styles.input}
          placeholderTextColor="rgb(90, 90, 90)"
        />
        <TextInput
          placeholder="Country"
          style={styles.input}
          placeholderTextColor="rgb(90, 90, 90)"
        />
        <TextInput
          placeholder="Zip Code"
          style={styles.input}
          placeholderTextColor="rgb(90, 90, 90)"
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('Checkout')}>
            <Icon
              name="angle-left"
              size={20}
              style={{color: 'white', paddingRight: wp('1.7%')}}
            />
            <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>
              Back
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate('CreditCard')}>
            <Text style={{fontSize: 18, fontWeight: '700', color: 'white'}}>
              Next
            </Text>
            <Icon
              name="angle-right"
              size={20}
              style={{color: 'white', paddingLeft: wp('2%')}}
            />
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    flex: 0.6,
    backgroundColor: 'rgb(221, 221, 221)',

    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  topText: {
    fontSize: 28,
    paddingTop: hp('4%'),
    color: 'rgb(39, 39, 39)',
    fontWeight: '700',
  },
  body: {
    flex: 3,

    marginTop: hp('8.2%'),
  },
  input: {
    borderColor: 'rgb(158, 158, 158)',
    borderWidth: 1.4,
    marginTop: hp('1.8%'),
    marginHorizontal: wp('10%'),
    borderRadius: 30,
    paddingLeft: wp('5%'),
    paddingVertical: hp('1%'),
  },
  button: {
    backgroundColor: 'rgb(0, 219, 228)',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: wp('13%'),
    marginRight: wp('11%'),
    paddingVertical: hp('1%'),
    paddingHorizontal: wp('5%'),
    borderRadius: 12,
    marginTop: hp('7%'),
  },
});
