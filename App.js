import React, { Component } from 'react';
import {
    DeviceEventEmitter,
    NativeAppEventEmitter,
    Platform,
} from 'react-native'
import Router from './src/deneme/router';
import { Actions } from 'react-native-router-flux';
import signalr from 'react-native-signalr';
import PushNotification from 'react-native-push-notification';
import BackgroundTask from 'react-native-background-task';
import { signalrConn, backgroundTaskConn, read } from './src/service/loginFetch';
import AsyncStorage from "@react-native-community/async-storage";
import BackgroundTimer from 'react-native-background-timer';

// PushNotification.requestPermissions().then(() => {

// })

PushNotification.createChannel(
    {
        channelId: "channel-id",
        channelName: "My channel",
        channelDescription: "A channel to categorise your notifications",
        soundName: "default",
        importance: 4, // (optional) default: 4. Int value of the Android notification importance
        vibrate: true,

    },
    (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);
BackgroundTask.define(() => {
    console.log('Hello from a background task');
    // notificationHub.on("ReceiveNotifications", function (notification) {
    //     console.log(notification);
    //     PushNotification.localNotification({
    //         title: notification.title,
    //         message: notification.message,
    //         vibrate: true,
    //         playSound: true,
    //         color:"yellow"
    //     });
    //     notificationHub.invoke('MarkNotificationsAsReceived')
    //         .fail(() => {
    //             console.warn('error when calling MarkNotificationsAsReceived backgrountask')
    //         })
    BackgroundTask.finish();
    // });
    // connection.start().done(() => {
    //     console.log('Now connected, connection ID=' + connection.id);
    // }).fail(() => {
    //     console.log('Failed BackgroundTask');
    // });
})

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            token: '',
            clicked: false
        }

    }
    componentDidMount() {
        BackgroundTask.schedule();

        this.readStore().then(() => {
            if (this.state.token != '') {
                Actions.home({ token: this.state.token })
                console.log("asdasdad", this.state.token)
            }
        });
    }

    readStore = async () => {
        try {
            const tokenValueRaw = await AsyncStorage.getItem("token");
            const tokenValue = JSON.parse(tokenValueRaw) ?? [];
            this.setState({ token: tokenValue })

        } catch (e) {
            console.error(e)
        }
    }
    signalrConnection = () => {
        const { token } = this.state;
        const connection = signalr.hubConnection('http://192.168.41.182/NotificationWebService');
        console.log("AppJsToken.", token)
        connection.qs = { "bearer": token };
        connection.logging = false;
        const notificationHub = connection.createHubProxy(`notificationHub`);
        notificationHub.on("ReceiveNotifications", function (response) {
            console.log("responsenotificationsssss", response);
            var notification = response.notification;



            // PushNotification.requestPermissions().then(()=>{
                PushNotification.localNotification({
                    title: notification.Title,
                    message: notification.Message,
                    vibrate: true,
                    channelId: "channel-id",
                    category: notification.Category,
                    ignoreInForeground: false,
                    largeIconUrl: "https://pngimg.com/uploads/butterfly/butterfly_PNG1040.png",
                    color: "purple",

                });
            // })



            // console.log("click mi ", this.state.clicked);
            // if (this.state.clicked) {
            //     Actions.login()
            // }
            // else {
            //   PushNotification.localNotification({
            //     largeIcon: "ic_launcher",
            //     title: "Test", 
            //   });
            // }
            notificationHub.invoke('MarkNotificationsAsReceived')
                .fail(() => {
                    console.warn('error when calling MarkNotificationsAsReceived')
                })
            // console.log('NOTIFICATION:', response.notifications)
            // const clicked = response.notifications.userInteraction;
            // if (clicked) {
            //     Actions.login()
            // }

        });
        // PushNotification.userInteraction(()=>{
        //     console.log("TIKLANDIII")
        // })
        connection.start().done(() => {
            console.log('Now connected, connection ID=' + connection.id);
        }).fail((error) => {
            console.log('Failedddddd', error);
        });

        // BackgroundTask.define(() => {
        //     console.log('Hello from a background task');
        //     notificationHub.on("ReceiveNotifications", function (notification) {
        //         console.log(notification);
        //         PushNotification.localNotification({
        //             title: notification.title,
        //             message: notification.message,
        //             vibrate: true,
        //             playSound: true,
        //             color:"yellow"
        //         });
        //         notificationHub.invoke('MarkNotificationsAsReceived')
        //             .fail(() => {
        //                 console.warn('error when calling MarkNotificationsAsReceived backgrountask')
        //             })
        //         BackgroundTask.finish();
        //     });
        //     connection.start().done(() => {
        //         console.log('Now connected, connection ID=' + connection.id);
        //     }).fail(() => {
        //         console.log('Failed BackgroundTask');
        //     });
        // })


    }

    render() {

        this.signalrConnection();
        return (
            <Router />
        )
    }
}