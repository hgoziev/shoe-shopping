import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Row3 extends Component {
  render() {
    return (
      <ScrollView
        style={styles.row}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          flexDirection: 'row',

          alignItems: 'center',
        }}>
        <View style={styles.cart}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 13,
              paddingTop: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: 'rgb(0, 220, 228)',
                }}>
                $
              </Text>
              <Text
                style={{
                  color: 'rgb(62, 44, 102)',
                  fontWeight: '700',
                  fontSize: 16,
                }}>
                160
              </Text>
            </View>

            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Icon name="star" size={16} style={{color: 'rgb(251, 219, 1)'}} />
              <Icon name="star" size={16} style={{color: 'rgb(251, 219, 1)'}} />
              <Icon name="star" size={16} style={{color: 'rgb(251, 219, 1)'}} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              paddingHorizontal: 20,
              marginTop: -10,
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/product/top2.png')}
                style={{width: 110, height: 110}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'flex-start',

              paddingBottom: 10,
              paddingHorizontal: 7,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'rgb(62, 44, 102)',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Nike Joy Ride CC3
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cart}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 13,
              paddingTop: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: 'rgb(0, 220, 228)',
                }}>
                $
              </Text>
              <Text
                style={{
                  color: 'rgb(62, 44, 102)',
                  fontWeight: '700',
                  fontSize: 16,
                }}>
                160
              </Text>
            </View>

            <TouchableOpacity>
              <Icon name="male" size={20} style={{color: 'rgb(62, 44, 102)'}} />
            </TouchableOpacity>
          </View>

          <View
            style={{
              paddingHorizontal: 10,
              marginTop: -10,
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/product/male.png')}
                style={{width: 120, height: 100}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'flex-start',

              paddingTop: 10,
              paddingHorizontal: 7,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'rgb(62, 44, 102)',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Nike Joy Ride CC3
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cart}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 13,
              paddingTop: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: 'rgb(0, 220, 228)',
                }}>
                $
              </Text>
              <Text
                style={{
                  color: 'rgb(62, 44, 102)',
                  fontWeight: '700',
                  fontSize: 16,
                }}>
                160
              </Text>
            </View>

            <TouchableOpacity>
              <Icon
                name="female"
                size={20}
                style={{
                  color: 'rgb(242, 0, 128)',
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              paddingHorizontal: 20,
              marginTop: -10,
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/pumafinal.png')}
                style={{width: 110, height: 110}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'flex-start',

              paddingBottom: 10,
              paddingHorizontal: 7,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'rgb(62, 44, 102)',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Nike Joy Ride CC3
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.cart}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 13,
              paddingTop: 10,
            }}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '700',
                  color: 'rgb(0, 220, 228)',
                }}>
                $
              </Text>
              <Text
                style={{
                  color: 'rgb(62, 44, 102)',
                  fontWeight: '700',
                  fontSize: 16,
                }}>
                160
              </Text>
            </View>

            <TouchableOpacity>
              <Icon
                name="child"
                size={20}
                style={{
                  color: 'rgb(210, 222, 0)',
                }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{
              paddingHorizontal: 20,
              marginTop: -10,
            }}>
            <TouchableOpacity>
              <Image
                source={require('../../assets/images/jordanfinal.png')}
                style={{width: 110, height: 110}}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              justifyContent: 'flex-start',

              paddingBottom: 10,
              paddingHorizontal: 7,
            }}>
            <TouchableOpacity>
              <Text
                style={{
                  color: 'rgb(62, 44, 102)',
                  fontSize: 16,
                  fontWeight: '700',
                }}>
                Jordan Classic
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flex: 1,
    flexDirection: 'row',
    elevation: 10,
  },
  cart: {
    backgroundColor: 'rgb(242, 242, 242)',
    flex: 1,
    // padding: 40,
    borderRadius: 20,
    marginLeft: 25,
    elevation: 10,
    marginBottom: 10,
    marginTop: 5,
    width: 150,
    height: 165,
    marginRight: 10,
  },
});
