import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  StyleSheet,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Saved({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={{color: 'white', fontSize: 28, fontWeight: '700'}}>
          My Cart
        </Text>
      </View>

      <ScrollView
        style={styles.scroll}
        vertical
        showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <View style={styles.image}>
            <Image
              source={require('../../assets/images/transparent/air1.png')}
              style={{
                width: wp('35%'),
                height: hp('19%'),
                marginHorizontal: wp('4%'),
                marginVertical: hp('1%'),
              }}
            />
          </View>

          <View
            style={{marginHorizontal: wp('3.5%'), marginVertical: hp('2%')}}>
            <Text
              style={{
                fontWeight: '700',
                fontSize: 20,
                color: 'rgb(90, 90, 90)',
              }}>
              Nike Joy Ride
            </Text>
            <View style={{flexDirection: 'row', marginTop: hp('2%')}}>
              <Text
                style={{
                  color: 'rgb(44, 44, 44)',
                  fontSize: 18,
                  fontWeight: '700',
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: 'rgb(44, 44, 44)',
                }}>
                190
              </Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                paddingTop: hp('5%'),
              }}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgb(234, 234, 235)',
                  paddingHorizontal: wp('2%'),
                  paddingBottom: hp('0.5%'),
                  borderRadius: 7,
                }}>
                <Icon
                  name="minus"
                  size={16}
                  style={{paddingTop: hp('1%'), color: 'rgb(86, 86, 86)'}}
                />
              </TouchableOpacity>
              <Text
                style={{
                  marginHorizontal: wp('4%'),
                  fontSize: 20,
                  fontWeight: '700',
                }}>
                1
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgb(234, 234, 235)',
                  paddingHorizontal: wp('2%'),
                  paddingBottom: hp('0.5%'),
                  borderRadius: 7,
                }}>
                <Icon
                  name="plus"
                  size={16}
                  style={{paddingTop: hp('1%'), color: 'rgb(86, 86, 86)'}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View
          style={{
            borderWidth: 1,
            borderColor: 'rgb(209, 209, 209)',
            marginTop: hp('3%'),
          }}
        />
      </ScrollView>

      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Shop')}
          style={{
            backgroundColor: 'rgb(237, 237, 237)',
            borderRadius: 15,
            marginHorizontal: wp('3%'),
            paddingHorizontal: wp('6%'),
            paddingVertical: hp('1.7%'),
            elevation: 10,
            borderWidth: 1,
            borderColor: 'rgb(209, 209, 209)',
          }}>
          <Text
            style={{
              color: 'rgb(0, 219, 228)',
              fontSize: 20,
              fontWeight: '700',
            }}>
            Shop More
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Checkout')}
          style={{
            backgroundColor: 'rgb(0, 219, 228)',
            paddingHorizontal: wp('6%'),
            paddingVertical: hp('1.7%'),
            borderRadius: 15,
            elevation: 10,
            borderWidth: 1,
            borderColor: 'rgb(209, 209, 209)',
          }}>
          <Text style={{fontSize: 20, color: 'white', fontWeight: '700'}}>
            Checkout
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
  title: {
    flex: 0.2,
    backgroundColor: 'rgb(34, 177, 184)',
    alignItems: 'center',
    justifyContent: 'center',
    // borderBottomLeftRadius: 10,
    // borderBottomRightRadius: 10,

    elevation: 1,
    flexDirection: 'row',
  },
  scroll: {
    flex: 4,
  },
  top: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  bottom: {
    flex: 2,
    marginHorizontal: wp('5%'),
    marginVertical: hp('5%'),
  },
  button: {
    flex: 0.17,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: hp('1%'),
    flexDirection: 'row',
  },
  image: {
    backgroundColor: 'rgb(234, 234, 235)',
    borderRadius: 20,
    marginHorizontal: wp('3.5%'),
    marginVertical: hp('2%'),
    elevation: 3,
  },
  payment: {
    paddingTop: hp('5%'),
  },
});
