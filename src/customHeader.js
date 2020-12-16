import React, { Component } from 'react';
import { Text, View, SafeAreaView, Image, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Actions} from 'react-native-router-flux';
export default class CustomHeader extends Component {
  render() {
    return (
      <View style={{
        flexDirection: 'row', height: 60,justifyContent:'center',shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 2,
        borderBottomWidth:0.1 
      
      }}>
        <View style={{ flex: 1, justifyContent: 'center' }}>
          {
            this.props.isHome ?
              <TouchableOpacity onPress={() => this.props.navigation.openDrawer()}>
                {/* <Image style={{ width: 30, height: 30, marginLeft: 10 }}
                  source={require('../images/menu.png')}
                  resizeMode="contain"
                /> */}
              </TouchableOpacity>
              :
              <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}
                onPress={() => Actions.pop()}
              >
                <Icon
                  name='chevron-left'
                  color="teal"
                  size={25}
                  style={{marginLeft: 10,justifyContent:'center'}}
              />
              </TouchableOpacity>
          }

        </View>
        <View style={{ flex: 12, justifyContent: 'center' }}>
              <Text style={{ textAlign: 'center', color: this.props.color,fontSize:25,fontWeight:'bold' }}>
                {this.props.title}
              </Text>
        </View>
       
        <View style={{ flex: 1 }}></View>
      </View>
    )
  }
}