// import React, { Component } from 'react';
// import {
//     SafeAreaView,
//     StyleSheet,
//     ScrollView,
//     View,
//     Text,
//     StatusBar,
//     TouchableOpacity,
//     Image,
//     ImageBackground,
//     Dimensions,
//     TextInput, Alert,
//     Button, ActivityIndicator
// } from 'react-native';
// import { getToken } from '../service/loginFetch';
// const { width, height } = Dimensions.get("screen");

// export default class LoginScreen extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             password: '',
//             systemID: '',
//             data: [],
//             dataSuccess: false,
//             token: '',
//             isLoading: false,
//             disableInput: false
//         };
//     }


//     render() {
//         let { isLoading } = this.state;
//         const { username, password, systemID } = this.state;
//         if (isLoading) {
//             return (
//                 <View style={{ marginTop: height / 2.25 }}>
//                     <ActivityIndicator size="large" animating color="black" />
//                 </View>
//             )
//         }
//         else {
//             return (
//                 <ImageBackground source={require("../../assets/images/bgbg.png")}
//                     style={{ height: "100%", width: "100%" }}>
//                     <ScrollView
//                         showsVerticalScrollIndicator={false}
//                     >
//                         <View style={styles.loginContainer}>
//                             <View style={{ justifyContent: 'center', alignItems: 'center' }}>
//                                 <View style={styles.border}></View>
//                                 <TextInput
//                                     style={styles.textInputStyle}
//                                     placeholder='Username'
//                                     underlineColorAndroid='transparent'
//                                     onChangeText={value =>
//                                         this.setState({ username: value })
//                                     }
//                                 />
//                                 <View style={styles.border}></View>
//                                 <View style={styles.passwordContainer}>
//                                     <TextInput
//                                         style={styles.textInputStyle}
//                                         placeholder='Şifre'
//                                         underlineColorAndroid='transparent'
//                                         onChangeText={value =>
//                                             this.setState({ password: value })
//                                         }

//                                     />
//                                     <View style={styles.border}></View>
//                                 </View>

//                             </View>

//                             <View style={styles.buttonStyle}>
//                                 <Button
//                                     title='Giriş'
//                                     color='#f47500'
//                                     disabled={this.state.disableInput}
//                                     onPress={() => {
//                                         this.setState({
//                                             disableInput: true
//                                         });
//                                         getToken(this.state.username, this.state.password);
//                                         this.setState({
//                                             disableInput: false
//                                         });
//                                     }}

//                                 />
//                             </View>

//                         </View>
//                     </ScrollView>
//                 </ImageBackground>
//             )
//         }

//     }
// }
// const styles = StyleSheet.create({
//     navbar: {
//         width: '100%',
//         resizeMode: 'contain',
//         height: 80,
//         backgroundColor: '#8b3d8d'
//     },
//     loginContainer: {
//         justifyContent: 'center',
//         height: height / 1.5,

//         borderRadius: 10,
//         margin: 20,
//         opacity: 1,
//         padding: 15,
//         marginTop: '20%'

//     },
//     border: {
//         borderBottomWidth: 1,
//         borderColor: '#E5E5E8',
//     },
//     textInputStyle: {
//         alignSelf: 'stretch',
//         color: 'black',
//         fontWeight: 'bold',
//         padding: 15,
//         borderRadius: 5,
//         fontSize: 18,
//         flexDirection: 'row',
//         height: 50,
//         width: 'auto',
//         alignItems: 'center',
//         flexGrow: 2,
//         fontSize: 17,
//         marginBottom: 10,
//         borderBottomWidth: 2,
//         borderColor: '#ceced0',

//     },
//     passwordContainer: {
//         flexDirection: 'row',
//         paddingBottom: 10,
//     },
//     buttonStyle: {
//         paddingTop: 40,
//         justifyContent: 'center',
//         fontSize: 18,
//         marginRight: 'auto',
//         marginLeft: 'auto',
//         width: '80%',

//     }
// })




import AsyncStorage from "@react-native-community/async-storage";
import React, { Component } from "react";
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Image,
    ImageBackground,
    Dimensions,
    TextInput, Alert,
    Button, ActivityIndicator
} from 'react-native';
import { Actions } from 'react-native-router-flux';

import signalr from 'react-native-signalr';
import PushNotification from 'react-native-push-notification';
import BackgroundTask from 'react-native-background-task';
const { width, height } = Dimensions.get("screen");
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            token: '',
        };
    }

    fetchToken = () => {
        fetch('http://192.168.41.182/NotificationWebService/Token', {
            method: 'POST',
            body: 'grant_type=password&username=' + this.state.username + '&password=' + this.state.password
        })
            .then((response) => response.json())
            .then((responseJson) => {
                this.setState({ token: responseJson.access_token })
                console.log("RJ:", responseJson.access_token)
                const { token } = this.state;
                if (responseJson.access_token != null && responseJson.access_token != "" && responseJson.access_token != undefined) {
                    this.storeToken();
                    Actions.home({ token: token })
                }
            })
            .catch((error) => console.error(error));
    }

    storeToken = async () => {
        const { token } = this.state;
        try {
            await AsyncStorage.setItem('token', JSON.stringify(token));
        }
        catch (e) {
            console.log("storeToken:", e)
        }
    }

    readStore = async () => {
        try {
            const value = await AsyncStorage.getItem('token');
            const parsedValue = JSON.parse(value);
            console.log("parsedValue:", parsedValue);
            if (parsedValue !== null) {
                this.setState({
                    token: parsedValue
                }, () => this.onPressLogin())
            }
        } catch (error) {
            console.log(error);
        }
    }

    onPressLogin = () => {
        this.fetchToken();
    }

    render() {
        console.log("renderToken:", this.state.token)
        return (
            <SafeAreaView>
                <ImageBackground source={require("../../assets/images/bg1.png")}
                    style={{ height: "100%", width: "100%",}}>
                    <ScrollView style={{ flex: 1 }}>

                        <View style={{ marginTop: height / 3, flex: 1, marginRight: 5 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center', marginRight: 'auto', marginLeft: 'auto', marginTop: -100, paddingBottom: 80 }}>
                                <Text style={{ fontSize: 40, fontWeight: 'bold',color:'#514bb5' }}>
                                    GİRİŞ YAP
                                    </Text>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={{ alignItems: 'flex-start', flex: 12 }}>

                                    <TextInput
                                        placeholder='Kullanıcı Adı...'
                                        underlineColorAndroid='transparent'
                                        onChangeText={value =>
                                            this.setState({ username: value })
                                        }
                                        style={{
                                            borderWidth: 1, borderColor: '#6b1f6c',
                                            height: 80, borderTopRightRadius: 100,
                                            paddingLeft: 20, fontSize: 18, width: '100%'
                                        }}

                                    />
                                    <TextInput
                                        placeholder='Şifre...'
                                        underlineColorAndroid='transparent'
                                        onChangeText={value =>
                                            this.setState({ password: value })
                                        }
                                        style={{
                                            borderWidth: 1, borderColor: 'gray',
                                            height: 80, borderBottomRightRadius: 100,
                                            paddingLeft: 20, fontSize: 18, width: '100%'
                                        }}

                                    />
                                </View>
                                <View style={{ alignItems: 'flex-end', flex: 2, justifyContent: 'center', marginLeft: -30, width: 100, }}>
                                    <TouchableOpacity
                                        onPress={this.onPressLogin.bind(this)}
                                        style={{ height: 100, width: 100, borderRadius: 100, backgroundColor: '#6b1f6c', justifyContent: 'center', alignItems: 'center' }}
                                    ><Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center', fontSize: 22 }}>Giriş</Text></TouchableOpacity>
                                </View>

                            </View>

                        </View>

                    </ScrollView>

                </ImageBackground>
            </SafeAreaView>
        )
    }
}