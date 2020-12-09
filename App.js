import React, { Component } from 'react';
import {
    DeviceEventEmitter,
    NativeAppEventEmitter,
    Platform,
} from 'react-native'
import Router from './src/deneme/router';
import { Actions } from 'react-native-router-flux';
import signalr from 'react-native-signalr';
import PushNotification, { PushNotificationOptions } from 'react-native-push-notification';
import BackgroundTask from 'react-native-background-task';
import { signalrConn, backgroundTaskConn, read } from './src/service/loginFetch';
import AsyncStorage from "@react-native-community/async-storage";

const connection = signalr.hubConnection('http://192.168.43.210/NotificationWebService');

PushNotification.configure({
    onNotification: async function (notification) {
        const tokenValueRaw = await AsyncStorage.getItem("token");
        const tokenValue = JSON.parse(tokenValueRaw) ?? [];
        connection.qs = { "bearer": tokenValue };
        connection.logging = false;
        const notificationHub = connection.createHubProxy(`notificationHub`);
        var guid = notification.tag;
        console.log(guid);
        connection.start().done(() => {
            notificationHub.invoke('MarkNotificationAsRead', guid)
                .fail((error) => {
                    console.warn('error when calling MarkNotificationAsRead: ', error)
                })
            console.log('Now connected, connection ID=' + connection.id);
        }).fail((error) => {
            console.log('Failed configure', error);
        });
        Actions.purchaseOrderList();
    },
    requestPermissions: false
});
BackgroundTask.define(async () => {
    console.log('HELLO FROM BACKGROUND TASK')

    const tokenValueRaw = await AsyncStorage.getItem("token");
    const tokenValue = JSON.parse(tokenValueRaw) ?? [];

    connection.qs = { "bearer": tokenValue };
    connection.logging = false;
    const notificationHub = connection.createHubProxy(`notificationHub`);
    notificationHub.on("ReceiveNotifications", function (response) {
        var notification = response.notification;

        PushNotification.localNotification({
            title: notification.Title,
            message: notification.Message,
            vibrate: true,
            channelId: "channel-id",
            category: notification.Category,
            ignoreInForeground: false,
            largeIconUrl: "https://pngimg.com/uploads/butterfly/butterfly_PNG1040.png",
            color: "purple",
            ongoing: false,


        });
        notificationHub.invoke('MarkNotificationsAsReceived')
            .fail(() => {
                console.warn('error when calling MarkNotificationsAsReceived')
            })

    });
    connection.start().done(() => {
        console.log('Now connected, connection ID=' + connection.id);
    }).fail((error) => {
        console.log('Failedddddd', error);
    });

    console.log('HELLO FROM BACKGROUND TASK FINISH')
    BackgroundTask.finish()
})
BackgroundTask.schedule();

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
        connection.qs = { "bearer": token };
        connection.logging = false;
        const notificationHub = connection.createHubProxy(`notificationHub`);
        notificationHub.on("ReceiveNotifications", function (response) {
            console.log("bildirim geldi")
            var notification = response.notification;
            PushNotification.localNotification({
                title: notification.Title,
                message: notification.Message,
                vibrate: true,
                channelId: "channel-id",
                category: notification.Category,
                ignoreInForeground: false,
                largeIconUrl: "https://pngimg.com/uploads/butterfly/butterfly_PNG1040.png",
                color: "purple",
                showWhen: true,
                playSound: true,
                tag: notification.Guid
            });
            PushNotification.userInteraction

            notificationHub.invoke('MarkNotificationsAsReceived')
                .fail(() => {
                    console.warn('error when calling MarkNotificationsAsReceived')
                })

        });
        connection.start().done(() => {
            console.log('Now connected, connection ID=' + connection.id);
        }).fail((error) => {
            console.log('Failedddddd', error);
        });
    }

    render() {
        this.signalrConnection();
        BackgroundTask.schedule()
        return (
            <Router />
        )
    }
}