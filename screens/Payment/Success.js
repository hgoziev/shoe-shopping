import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export default function Success({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Icon
          name="check-circle"
          size={60}
          style={{color: 'rgb(0, 219, 228)'}}
        />
        <Text style={styles.topText}>Payment Successful</Text>
      </View>
      <View style={styles.bottom}>
        <View>
          <Image
            source={require('../../assets/images/transparent/kargo.jpg')}
            style={{width: wp('40%'), height: hp('20%')}}
          />
        </View>

        <View style={{justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 16, color: 'rgb(39, 39, 39)'}}>
            Products are preparing for you
          </Text>
          <Text style={{color: 'rgb(158, 158, 158)', marginTop: hp('2%')}}>
            Estimated delivery date
          </Text>
          <Text style={{color: 'rgb(158, 158, 158)'}}>
            12 September ~ 14 September
          </Text>
        </View>
      </View>
      <View
        style={{flex: 0.7, marginTop: hp('10%'), marginHorizontal: wp('40%')}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Shop')}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgb(0, 219, 228)',
            paddingHorizontal: 0,
            paddingVertical: hp('1.2%'),
            borderRadius: 12,
          }}>
          <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>
            Done
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  top: {
    marginTop: hp('10%'),
    flex: 1,
    alignItems: 'center',
  },
  bottom: {
    flex: 1,

    borderColor: 'black',

    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  topText: {
    color: 'rgb(39, 39, 39)',
    fontWeight: '700',
    fontSize: 24,
    marginTop: hp('5%'),
  },
});
