import React, {useState} from 'react';
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
        <TouchableOpacity onPress={() => navigation.navigate('Review')}>
          <Icon
            name="chevron-circle-left"
            size={36}
            style={{
              marginRight: wp('23%'),
              marginLeft: wp('8%'),
              color: 'rgb(0, 219, 228)',
            }}
          />
        </TouchableOpacity>

        <Text
          style={{color: 'rgb(38, 38, 38)', fontSize: 26, fontWeight: '700'}}>
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
            borderColor: 'rgb(243, 243, 244)',
            marginTop: hp('3%'),
          }}
        />
        <View style={styles.bottom}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: wp('30%'),
            }}>
            <Text
              style={{
                color: 'rgb(10, 10, 10)',
                fontSize: 16,
                fontWeight: '500',
              }}>
              Total
            </Text>
            <Text
              style={{
                color: 'rgb(10, 10, 10)',
                fontSize: 16,
                fontWeight: '500',
              }}>
              $190
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: wp('30%'),
              paddingTop: hp('1.5%'),
            }}>
            <Text
              style={{
                color: 'rgb(10, 10, 10)',
                fontSize: 16,
                fontWeight: '500',
              }}>
              Delivery
            </Text>
            <Text
              style={{
                color: 'rgb(10, 10, 10)',
                fontSize: 16,
                fontWeight: '500',
              }}>
              Free
            </Text>
          </View>
          <View
            style={{
              borderColor: 'rgb(90, 90, 90)',
              borderWidth: 0.6,
              marginRight: wp('20%'),
              marginTop: hp('2%'),
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: wp('30%'),
              marginTop: hp('2.5%'),
            }}>
            <Text
              style={{
                color: 'rgb(10, 10, 10)',
                fontSize: 18,
                fontWeight: '700',
              }}>
              Subtotal
            </Text>
            <Text
              style={{
                color: 'rgb(10, 10, 10)',
                fontSize: 18,
                fontWeight: '700',
              }}>
              $190
            </Text>
          </View>

          <View style={styles.payment}>
            <Text
              style={{
                fontSize: 18,
                fontWeight: '700',
                color: 'rgb(44, 44, 44)',
              }}>
              Payment Method
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View
                style={{
                  flexDirection: 'row',
                  flex: 2,
                  marginTop: hp('2%'),
                  backgroundColor: 'rgb(237, 237, 237)',
                  paddingVertical: 15,
                  paddingLeft: 10,
                  // marginRight: wp('20%'),
                  borderRadius: 15,
                }}>
                <Image
                  source={require('../../assets/images/transparent/master.png')}
                  style={{
                    width: wp('8'),
                    height: hp('3%'),
                    marginRight: wp('2%'),
                  }}
                />
                <Text
                  style={{
                    paddingHorizontal: 10,
                    fontSize: 16,
                    color: 'rgb(86, 86, 86)',
                  }}>
                  **** **** 3456
                </Text>
              </View>
              <View
                style={{
                  flex: 0.9,

                  alignItems: 'center',
                  justifyContent: 'center',
                  marginTop: 13,
                }}>
                <TouchableOpacity
                  style={{
                    backgroundColor: 'rgb(237, 237, 237)',
                    paddingVertical: 15,
                    paddingHorizontal: wp('5%'),
                    borderRadius: 15,
                  }}>
                  <Text style={{color: 'rgb(86, 86, 86)'}}>Add</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.button}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Payment')}
          style={{
            backgroundColor: 'rgb(0, 219, 228)',
            paddingHorizontal: wp('16%'),
            paddingVertical: hp('1.7%'),
            borderRadius: 15,
          }}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: '700'}}>
            Place Order
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
    backgroundColor: 'rgb(221, 221, 221)',
    alignItems: 'center',
    //     justifyContent: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
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
