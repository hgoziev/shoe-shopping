import React, {Component} from 'react';
import {StyleSheet, View, Switch, ScrollView, Text} from 'react-native';
import {
  CreditCardInput,
  LiteCreditCardInput,
} from 'react-native-credit-card-input';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/AntDesign';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    // marginTop: 60,
  },
  top: {
    // justifyContent: '',
    alignItems: 'center',
    paddingVertical: hp('6%'),
    backgroundColor: 'rgb(221, 221, 221)',
    marginBottom: hp('5%'),
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    flexDirection: 'row',
    paddingHorizontal: wp('5%'),
  },
  topText: {
    color: 'rgb(39, 39, 39)',
    fontWeight: '700',
    fontSize: 26,
    paddingLeft: wp('17%'),
  },
  label: {
    color: 'black',
    fontSize: 12,
  },
  input: {
    fontSize: 16,
    color: 'black',
  },
  button: {
    marginHorizontal: wp('5%'),
    backgroundColor: 'grey',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('10%'),
    backgroundColor: 'rgb(0, 219, 228)',
    borderRadius: 10,
    elevation: 10,
    borderColor: 'silver',
    borderWidth: 1,
  },
  button1: {
    marginHorizontal: wp('5%'),
    backgroundColor: 'grey',
    paddingVertical: hp('1.5%'),
    paddingHorizontal: wp('10%'),
    backgroundColor: 'rgb(239, 239, 240)',
    borderRadius: 10,
    elevation: 10,
    borderWidth: 1,
    borderColor: 'silver',
  },
});

export default class Example extends Component {
  constructor({navigation}) {
    super({navigation});
    this.state = {
      useLiteCreditCardInput: false,
      loading: true,
    };
  }

  _onChange = (formData) => console.log(JSON.stringify(formData, null, ' '));
  _onFocus = (field) => console.log('focusing', field);
  _setUseLiteCreditCardInput = (useLiteCreditCardInput) =>
    this.setState({useLiteCreditCardInput});

  render() {
    // const navigation = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Payment')}>
            <Icon
              name="leftcircle"
              size={32}
              style={{color: 'rgb(0, 219, 228)'}}
            />
          </TouchableOpacity>
          <Text style={styles.topText}>Add Your Card</Text>
        </View>

        {this.state.useLiteCreditCardInput ? (
          <LiteCreditCardInput
            autoFocus
            inputStyle={styles.input}
            validColor={'black'}
            invalidColor={'red'}
            placeholderColor={'darkgray'}
            onFocus={this._onFocus}
            onChange={this._onChange}
          />
        ) : (
          <CreditCardInput
            autoFocus
            requiresName
            requiresCVC
            requiresPostalCode
            labelStyle={styles.label}
            inputStyle={styles.input}
            validColor={'black'}
            invalidColor={'red'}
            placeholderColor={'darkgray'}
            onFocus={this._onFocus}
            onChange={this._onChange}
            allowScroll={true}
          />
        )}

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginVertical: hp('20%'),
            flexDirection: 'row',
            // marginHorizontal: wp('30%'),
          }}>
          <TouchableOpacity
            style={styles.button1}
            onPress={() => this.props.navigation.navigate('Shop')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: 'rgb(0, 219, 228)',
              }}>
              Cancel
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate('Success')}>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '700',
                color: 'white',
              }}>
              Pay Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
