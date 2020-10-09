import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import uuid from 'react-native-uuid';

export default class Categories extends Component {
  state = {
    bgDefault: 'rgb(218, 240, 249)',
    bg: 'rgb(218, 240, 249)',
    bga: 'rgb(218, 240, 249)',
    bgr: 'rgb(218, 240, 249)',
    bgp: 'rgb(218, 240, 249)',
    bgu: 'rgb(218, 240, 249)',
    textColorPressed: 'white',
    textColorDefault: 'rgb(130, 130, 140)',
    pressed: false,
    idColor: '',
  };

  changeColor(id) {
    if (id === 'n' && !this.state.pressed) {
      this.setState({
        pressed: true,
        bg: 'rgb(61, 43, 101)',
        bga: this.bgDefault,
        bgr: this.bgDefault,
        bgp: this.bgDefault,
        bgu: this.bgDefault,
        idColor: 'n',
      });
    } else {
      this.setState({
        pressed: false,
        bg: this.bgDefault,
      });
    }

    if (id === 'a' && !this.state.pressed) {
      this.setState({
        pressed: true,
        bga: 'rgb(61, 43, 101)',
        bg: this.bgDefault,
        bgr: this.bgDefault,
        bgp: this.bgDefault,
        bgu: this.bgDefault,
        idColor: 'a',
      });
    } else {
      this.setState({
        pressed: false,
        bga: this.bgDefault,
      });
    }

    if (id === 'p' && !this.state.pressed) {
      this.setState({
        pressed: true,
        bgp: 'rgb(61, 43, 101)',
        bga: this.bgDefault,
        bgr: this.bgDefault,
        bg: this.bgDefault,
        bgu: this.bgDefault,
        idColor: 'p',
      });
    } else {
      this.setState({
        pressed: false,
        bgp: this.bgDefault,
      });
    }
    if (id === 'r' && !this.state.pressed) {
      this.setState({
        pressed: true,
        bgr: 'rgb(61, 43, 101)',
        bga: this.bgDefault,
        bg: this.bgDefault,
        bgp: this.bgDefault,
        bgu: this.bgDefault,
        idColor: 'r',
      });
    } else {
      this.setState({
        pressed: false,
        bgr: this.bgDefault,
      });
    }

    if (id === 'u' && !this.state.pressed) {
      this.setState({
        pressed: true,
        bgu: 'rgb(61, 43, 101)',
        bga: this.bgDefault,
        bg: this.bgDefault,
        bgp: this.bgDefault,
        bgr: this.bgDefault,
        idColor: 'u',
      });
    } else {
      this.setState({
        pressed: false,
        bgu: this.bgDefault,
      });
    }
  }

  render() {
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={{flexDirection: 'row'}}>
        <TouchableOpacity
          style={[
            styles.categories,
            {
              backgroundColor: this.state.bg,
            },
          ]}
          onPress={() => this.changeColor('n')}>
          <Text
            style={{
              fontSize: 16,
              color:
                this.state.idColor === 'n'
                  ? this.state.textColorPressed
                  : this.state.textColorDefault,
            }}>
            Nike
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.categories,
            {
              backgroundColor: this.state.bga,
            },
          ]}
          onPress={() => this.changeColor('a')}>
          <Text
            style={{
              fontSize: 16,
              color:
                this.state.idColor === 'a'
                  ? this.state.textColorPressed
                  : this.state.textColorDefault,
            }}>
            Adidas
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categories, {backgroundColor: this.state.bgr}]}
          onPress={() => this.changeColor('r')}>
          <Text
            style={{
              fontSize: 16,
              color:
                this.state.idColor === 'r'
                  ? this.state.textColorPressed
                  : this.state.textColorDefault,
            }}>
            Reebok
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categories, {backgroundColor: this.state.bgp}]}
          onPress={() => this.changeColor('p')}>
          <Text
            style={{
              fontSize: 16,
              color:
                this.state.idColor === 'p'
                  ? this.state.textColorPressed
                  : this.state.textColorDefault,
            }}>
            Puma
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.categories, {backgroundColor: this.state.bgu}]}
          onPress={() => this.changeColor('u')}>
          <Text
            style={{
              fontSize: 16,
              color:
                this.state.idColor === 'u'
                  ? this.state.textColorPressed
                  : this.state.textColorDefault,
            }}>
            Under Armour
          </Text>
        </TouchableOpacity>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  categories: {
    marginRight: 15,
    borderWidth: 0.1,
    borderRadius: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderColor: 'rgb(218, 240, 249)',
    marginBottom: 68,
    marginTop: 78,
  },
  catText: {
    fontSize: 18,
    color: 'white',
  },
});
