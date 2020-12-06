import React from 'react';
import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

export default function Saved({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <TouchableOpacity onPress={() => navigation.navigate('Review')}>
          <Icon name="chevron-circle-left" size={36} style={styles.icon} />
        </TouchableOpacity>

        <Text style={styles.mycart}>My Cart</Text>
      </View>

      <ScrollView
        style={styles.scroll}
        vertical
        showsVerticalScrollIndicator={false}>
        <View style={styles.top}>
          <View style={styles.image}>
            <Image
              source={require('../../assets/images/transparent/air1.png')}
              style={styles.img}
            />
          </View>

          <View
            style={{marginHorizontal: wp('3.5%'), marginVertical: hp('2%')}}>
            <Text style={styles.productTitle}>Nike Joy Ride</Text>
            <View style={{flexDirection: 'row', marginTop: hp('2%')}}>
              <Text style={styles.dollar}>$</Text>
              <Text style={styles.price}>190</Text>
            </View>

            <View
              style={{
                flexDirection: 'row',
                paddingTop: hp('5%'),
              }}>
              <TouchableOpacity style={styles.minusContainer}>
                <Icon
                  name="minus"
                  size={16}
                  style={{paddingTop: hp('1%'), color: 'rgb(86, 86, 86)'}}
                />
              </TouchableOpacity>
              <Text style={styles.qty}>1</Text>
              <TouchableOpacity style={styles.plusContainer}>
                <Icon
                  name="plus"
                  size={16}
                  style={{paddingTop: hp('1%'), color: 'rgb(86, 86, 86)'}}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.linebreak} />
        <View style={styles.bottom}>
          <View style={styles.totalContainer}>
            <Text style={styles.total}>Total</Text>
            <Text
              style={{
                color: 'rgb(10, 10, 10)',
                fontSize: 16,
                fontWeight: '500',
              }}>
              $190
            </Text>
          </View>

          <View style={styles.deliveryContainer}>
            <Text style={styles.delivery}>Delivery</Text>
            <Text style={styles.free}>Free</Text>
          </View>
          <View style={styles.linebreak} />
          <View style={styles.sub}>
            <Text style={styles.subText}>Subtotal</Text>
            <Text style={styles.price}>$190</Text>
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
