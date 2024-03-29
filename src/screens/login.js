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
    // OnSwitchChange(notificationType)
    // OnSwitchChange = {this.OnSwitchChange("HizmetBaslik")}
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
        return (
            <SafeAreaView>
                <ImageBackground source={require("../../assets/images/backg.png")}
                    resizeMode="cover"
                    style={{ height: height, width: "100%" }}>
                    <ScrollView style={{ flex: 1 }}>
                        <View style={{ justifyContent: 'center', marginRight: 'auto', marginLeft: 'auto', marginTop: '20%', }}>
                            <Text style={{ fontSize: 40, fontWeight: 'bold', color: '#514bb5' }}>
                                GİRİŞ YAP
                                    </Text>
                        </View>
                        
                        <View style={{
                            height: height / 2, backgroundColor: 'white',
                            marginTop: height / 4, opacity: 0.8, borderTopRightRadius: 50,
                            borderTopLeftRadius: 50, alignItems: 'center', paddingHorizontal: '5%',justifyContent:'center'
                        }}>
                                <TextInput
                                    placeholder='Kullanıcı Adı...'
                                    underlineColorAndroid='transparent'
                                    onChangeText={value =>
                                        this.setState({ username: value })
                                    }
                                    style={{
                                        borderWidth: 1, borderColor: '#6b1f6c',
                                        height: 60,  borderRadius: 10,
                                        paddingLeft: 20, fontSize: 18, width: '100%',
                                        marginBottom: 20
                                    }}

                                />
                                <TextInput
                                    placeholder='Şifre...'
                                    underlineColorAndroid='transparent'
                                    onChangeText={value =>
                                        this.setState({ password: value })
                                    }
                                    style={{
                                        borderWidth: 1, borderColor: '#6b1f6c',
                                        height: 60, borderRadius: 10, marginBottom: 20,
                                        paddingLeft: 20, fontSize: 18, width: '100%'
                                    }}

                                />

                                <TouchableOpacity
                                    onPress={this.onPressLogin.bind(this)}
                                    style={{ height: 60, width: width/3, borderRadius: 10, backgroundColor: '#514bb5', justifyContent: 'center', alignItems: 'center' }}
                                ><Text style={{ color: 'white', justifyContent: 'center', alignItems: 'center', fontSize: 22 }}>Giriş</Text></TouchableOpacity>
                         
                            </View>
                    </ScrollView>
                </ImageBackground>
            </SafeAreaView>
        )
    }
}