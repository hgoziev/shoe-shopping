import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export default function Saved({navigation}) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.topText}>Saved</Text>
        <Text style={styles.bottomText}>You have not saved anything yet. </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/transparent/tobe2.jpg')}
          style={styles.image}
        />
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
    flex: 0.8,
    backgroundColor: 'rgb(34, 177, 184)',
    justifyContent: 'center',
    alignItems: 'center',
    // borderBottomLeftRadius: 20,
    // borderBottomRightRadius: 20,
  },
  topText: {
    fontSize: 28,
    color: 'rgb(255, 255, 255)',
    fontWeight: '700',
  },
  bottomText: {
    color: 'rgb(241, 241, 241)',
  },
  image: {
    width: wp('40%'),
    height: hp('30%'),
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 4,
  },
});
