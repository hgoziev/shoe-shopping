import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from 'react-native';
import Icon from 'react-native-vector-icons';

export default class ProductList extends Component {
  render() {
    return (
      <ScrollView vertical showsVerticalScrollIndicator={false}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.firstRow}>
          <View style={styles.cart}>
            <View
              style={{flexDirection: 'row', justifyContent: 'space-around'}}>
              <View>
                <Text>$</Text>
                <Text>190</Text>
              </View>
              <TouchableOpacity>
                <Text>Icon</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.cart2}>
            <Text>ok</Text>
          </View>
        </ScrollView>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
  },
  firstRow: {
    flex: 1,
    flexDirection: 'row',
  },
  secodRow: {
    flexDirection: 'row',
    flex: 1,
  },
  cart: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  cart2: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
});
