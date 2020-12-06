import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: -20,
  },
  inputPart: {
    marginTop: 10,
    flex: 2,
    alignItems: 'center',

    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: 'rgb(242, 242, 242)',
    justifyContent: 'flex-start',
    paddingTop: 40,
    opacity: 0.84,
  },
  text: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'rgb(0, 200, 210)',
    borderRadius: 10,
    marginBottom: 60,
    paddingHorizontal: 10,
    paddingTop: 20,
    opacity: 1,
  },
  image: {
    width: 60,
    height: 80,
    paddingVertical: 80,
    paddingHorizontal: 90,
    marginHorizontal: 15,
  },
  imageEx: {
    paddingHorizontal: 105,
  },
  input: {
    marginTop: 8,
    justifyContent: 'flex-start',
    borderWidth: 0.5,
    borderRadius: 22,
    borderColor: 'rgb(175, 176, 181)',
    backgroundColor: 'white',
    paddingLeft: 14,
    paddingRight: 70,
    paddingVertical: 5,
    paddingHorizontal: 20,
    elevation: 5,
  },
  inputPas: {
    paddingRight: 150,
  },
  signText: {
    color: 'white',
    fontSize: 20,
    fontWeight: '700',
  },
  signupButtonContainer: {
    marginTop: 25,
    backgroundColor: 'rgb(0, 222, 233)',
    borderWidth: 0.5,
    borderColor: 'rgb(175, 176, 181)r',
    borderRadius: 20,
    paddingVertical: 7,
    paddingHorizontal: 25,
    elevation: 10,
  },
  textLogin: {
    color: 'rgb(0, 200, 210)',
    fontSize: 17,
    fontWeight: 'bold',
  },
});

export default styles;
