import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Source from '../../components/Images/Images';

// const array =[] ;
// const checkId =({route, navigation})=>{
//   for(let i = 0 ; i <= 16 ; i++){
//     let userID = route.params ;
//     if(userID){
//       array.push(userID)
//     }else{
//       return null
//     }
//   }
// }

function Review({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.firstHalf}>
        <View style={styles.header}>
          <View style={styles.topHeadaer}>
            <TouchableOpacity onPress={() => navigation.navigate('Shop')}>
              <Icon
                name="chevron-circle-left"
                size={36}
                style={{color: 'rgb(1, 219, 228)'}}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
              <Image
                source={require('../../assets/images/profile.jpg')}
                style={{
                  width: wp('11.5'),
                  height: hp('7'),
                  borderRadius: 40,
                  marginBottom: hp('-1.3%'),
                }}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.bottomHeader}>
            <Text
              style={{
                color: 'rgb(60, 41, 101)',
                fontSize: 24,
                fontWeight: '700',
                paddingTop: hp('1%'),
              }}>
              Nike Joy Ride CC3 2014
            </Text>
            <Text style={{color: 'rgb(157, 152, 177)', fontSize: 16}}>
              Men's BasketBall shoe
            </Text>
          </View>
        </View>

        <ScrollView
          style={styles.imageContainer}
          horizontal
          pagingEnabled={true}
          showsHorizontalScrollIndicator={false}>
          <Image
            source={require('../../assets/images/product/top.png')}
            style={{
              marginTop: hp('4%'),
              marginHorizontal: wp('17%'),
              width: wp('60%'),
              height: hp('20%'),
            }}
          />
          <Image
            style={{
              marginTop: hp('4%'),
              marginHorizontal: wp('17%'),
              width: wp('60%'),
              height: hp('20%'),
            }}
            source={require('../../assets/images/transparent/air1.png')}
          />

          <Image
            style={{
              marginTop: hp('4%'),
              marginHorizontal: wp('17%'),
              width: wp('60%'),
              height: hp('20%'),
            }}
            source={require('../../assets/images/transparent/air2.png')}
          />
        </ScrollView>
      </View>

      <View style={styles.secondHalf}>
        <ScrollView
          vertical
          style={{flex: 1}}
          showsVerticalScrollIndicator={false}>
          <View style={styles.description}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>
              Joy Ride CC3 possesses a freakish combination of height, length
              and speed rarely seen in the league.Very athletic and
              durable.Empowers the strength and flyies.
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: 'rgb(60, 41, 101)',
                  marginRight: 10,
                }}>
                Price:
              </Text>
              <Text
                style={{
                  color: 'rgb(0, 219, 228)',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: 'rgb(60, 41, 101)',
                }}>
                190
              </Text>
            </View>
          </View>

          <View style={styles.bottom}>
            <View style={styles.sizeOptions}>
              <View>
                <Text style={styles.sizeText}>Size</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    marginTop: hp('1%'),
                  }}>
                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Text style={styles.sizeTextExtra}>41</Text>
                    <Icon
                      name="chevron-down"
                      size={17}
                      style={{color: 'rgb(0, 219, 228)'}}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <Text style={styles.sizeText}>Color</Text>
                <View style={{flexDirection: 'row', paddingTop: hp('1%')}}>
                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Text style={styles.sizeTextExtra}>black</Text>
                    <Icon
                      name="chevron-down"
                      size={17}
                      style={{color: 'rgb(0, 219, 228)'}}
                    />
                  </TouchableOpacity>
                </View>
              </View>

              <View>
                <Text style={styles.sizeText}>QTY</Text>
                <View style={{flexDirection: 'row', paddingTop: hp('1%')}}>
                  <TouchableOpacity style={{flexDirection: 'row'}}>
                    <Text style={styles.sizeTextExtra}>1</Text>
                    <Icon
                      name="chevron-down"
                      size={17}
                      style={{color: 'rgb(0, 219, 228)'}}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.buyBotton}>
              <TouchableOpacity
                style={styles.addToBag}
                onPress={() => navigation.navigate('My Cart')}>
                <Text style={styles.addToBagText}>Add To Cart</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buyNow}
                onPress={() => navigation.navigate('Checkout')}>
                <Text style={styles.buyNowText}>Buy Now </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Review;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(218,241,248)',
  },
  firstHalf: {
    flex: 1,
  },
  header: {
    flex: 1,
  },
  topHeadaer: {
    flex: 0.6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: wp('7%'),
  },
  bottomHeader: {
    flex: 1,
    paddingTop: 5,
    marginHorizontal: wp('7%'),
  },
  imageContainer: {
    flex: 1,
    paddingBottom: hp('3.5%'),
  },
  secondHalf: {
    flex: 1,
    paddingHorizontal: wp('7%'),
    // paddingTop: hp('2%'),
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    elevation: 10,
  },
  description: {
    flex: 1,
    paddingTop: hp('3.5%'),
  },
  descriptionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgb(60, 41, 101)',
    marginBottom: hp('1.5%'),
  },
  descriptionText: {
    color: 'rgb(161, 157, 181)',
    lineHeight: hp('3.2%'),
    fontSize: 16,
    paddingBottom: hp('2%'),
  },
  bottom: {
    flex: 1,
    backgroundColor: 'white',
    // height: hp('20%'),
    paddingTop: hp('2.5%'),
    paddingBottom: hp('7%'),
  },
  sizeOptions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('10%'),
    backgroundColor: 'rgb(189, 241, 248)',
    borderRadius: 20,
    paddingHorizontal: wp('7%'),
    paddingVertical: hp('0.9%'),
    marginTop: 3,
    elevation: 5,
  },
  buyBotton: {
    flexDirection: 'row',
    paddingTop: hp('1.9%'),
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: wp('13%'),
    // paddingBottom: hp('10%'),
  },
  addToBag: {
    borderColor: 'rgb(239, 239, 240)',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgb(239, 239, 240)',
    elevation: 5,
  },
  addToBagText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'rgb(0, 219, 228)',
  },
  buyNow: {
    elevation: 5,
    borderColor: 'rgb(0, 219, 228)',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: 'rgb(0, 219, 228)',
  },
  buyNowText: {
    fontSize: 20,
    fontWeight: '700',
    color: 'white',
  },
  sizeText: {
    fontSize: 14,
    color: 'rgb(60, 41, 101)',
    fontWeight: '700',
  },
  sizeTextExtra: {
    paddingRight: wp('1%'),
    fontWeight: 'bold',
    fontSize: 16,
    color: 'rgb(60, 41, 101)',
  },
});
