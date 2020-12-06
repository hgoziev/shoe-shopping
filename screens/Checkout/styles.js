import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

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
  icon: {
    marginRight: wp('23%'),
    marginLeft: wp('8%'),
    color: 'rgb(0, 219, 228)',
  },
  mycart: {color: 'rgb(38, 38, 38)', fontSize: 26, fontWeight: '700'},
  img: {
    width: wp('35%'),
    height: hp('19%'),
    marginHorizontal: wp('4%'),
    marginVertical: hp('1%'),
  },
  productTitle: {
    fontWeight: '700',
    fontSize: 20,
    color: 'rgb(90, 90, 90)',
  },
  dollar: {
    color: 'rgb(44, 44, 44)',
    fontSize: 18,
    fontWeight: '700',
  },
  price: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'rgb(44, 44, 44)',
  },
  minusContainer: {
    backgroundColor: 'rgb(234, 234, 235)',
    paddingHorizontal: wp('2%'),
    paddingBottom: hp('0.5%'),
    borderRadius: 7,
  },
  qty: {
    marginHorizontal: wp('4%'),
    fontSize: 20,
    fontWeight: '700',
  },
  plusContainer: {
    backgroundColor: 'rgb(234, 234, 235)',
    paddingHorizontal: wp('2%'),
    paddingBottom: hp('0.5%'),
    borderRadius: 7,
  },
  linebreak: {
    borderWidth: 1,
    borderColor: 'rgb(243, 243, 244)',
    marginTop: hp('3%'),
  },
  totalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: wp('30%'),
  },
  total: {
    color: 'rgb(10, 10, 10)',
    fontSize: 16,
    fontWeight: '500',
  },
  deliveryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: wp('30%'),
    paddingTop: hp('1.5%'),
  },
  delivery: {
    color: 'rgb(10, 10, 10)',
    fontSize: 16,
    fontWeight: '500',
  },
  free: {
    color: 'rgb(10, 10, 10)',
    fontSize: 16,
    fontWeight: '500',
  },
  sub: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: wp('30%'),
    marginTop: hp('2.5%'),
  },
  subText: {
    color: 'rgb(10, 10, 10)',
    fontSize: 18,
    fontWeight: '700',
  },
});

export default styles;
