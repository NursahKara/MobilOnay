// import React, { Component } from 'react';
// import { Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { Actions } from 'react-native-router-flux';
// import { logout } from '../service/loginFetch';
// import screen2 from './screen2';
// function HomeScreen() {
//     return (
//         <SafeAreaView style={{ flex: 1, backgroundColor: '#c2bff1' }}>
//             <ScrollView>
//                 <TouchableOpacity 
//                 onPress={logout}
//                 style={{marginTop:10,flex:1,flexDirection:'row-reverse',paddingLeft:15,paddingTop:5}}>
//                     <Image source={require("../../assets/images/signout.png")} style={{ height: 40, width: 40}} />


//                 </TouchableOpacity>
//                 <View style={styles.header}>
//                     <View style={{alignItems:'flex-start',flex:1}}>
//                         <Text style={styles.headerText}>Hoşgeldin Kullanıcı</Text>
//                     </View>
//                 </View>
//                 <TouchableOpacity
//                     onPress={() => Actions.purchaseOrderList()}
//                     style={styles.card}>
//                     <View style={styles.left}>
//                         <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Satınalma Siparişleri</Text>
//                         <Text>Sipariş Onayı</Text>
//                     </View>
//                     <View style={styles.right}>
//                         <Image source={require("../../assets/images/bg.jpg")} style={styles.rightImage} />
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.card}>
//                     <View style={styles.left}>
//                         <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Satınalma Siparişi Toplu Onaylama</Text>
//                         <Text>Satınalma Siparişi Toplu Onaylama</Text>
//                     </View>
//                     <View style={styles.right}>
//                         <Image source={require("../../assets/images/bg.jpg")} style={styles.rightImage} />
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.card}>
//                     <View style={styles.left}>
//                         <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Fatura Ödemeleri</Text>
//                         <Text>Fatura Ödemeleri Onayı</Text>
//                     </View>
//                     <View style={styles.right}>
//                         <Image source={require("../../assets/images/bg.jpg")} style={styles.rightImage} />
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.card}>
//                     <View style={styles.left}>
//                         <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Fatura Toplu Ödemeleri</Text>
//                         <Text>Fatura Ödeme Toplu Onayı</Text>
//                     </View>
//                     <View style={styles.right}>
//                         <Image source={require("../../assets/images/bg.jpg")} style={styles.rightImage} />
//                     </View>
//                 </TouchableOpacity>
//                 <TouchableOpacity style={styles.card}>
//                     <View style={styles.left}>
//                         <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Kredi Bloke Onayları</Text>
//                         <Text>Kredi Bloke Onayları</Text>
//                     </View>
//                     <View style={styles.right}>
//                         <Image source={require("../../assets/images/bg.jpg")} style={styles.rightImage} />
//                     </View>
//                 </TouchableOpacity>
//             </ScrollView>
//         </SafeAreaView>

//     );
// }

// function ProfileScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Settings!</Text>
//         </View>
//     );
// }

// const Tab = createBottomTabNavigator();

// export default function App() {
//     return (
//         <NavigationContainer>
//             <Tab.Navigator
//                 screenOptions={({ route }) => ({
//                     tabBarIcon: ({ focused, color, size }) => {
//                         let iconName;
//                         if (route.name === 'Anasayfa') {
//                             iconName = focused
//                                 ? require('../../assets/images/home1.png')
//                                 : require('../../assets/images/home2.png')
//                         } else if (route.name === 'Profil') {
//                             iconName = focused
//                                 ? require('../../assets/images/man2.png')
//                                 : require('../../assets/images/man1.png')
//                         }

//                         return <Image source={iconName} style={{ width: 20, height: 20 }} resizeMode="contain" size={size} color={color} />;
//                     },
//                 })}
//                 tabBarComponent='TabBarBottomKeyboardAware'
//                 initialRouteName="Anasayfa"
//                 tabBarOptions={{
//                     activeTintColor: 'black',
//                     inactiveTintColor: 'gray',
//                     style: {
//                         backgroundColor: 'white',
//                         borderTopWidth: 0,
//                         backgroundColor: '#FFFFFF',
//                         borderTopRightRadius: 20,
//                         borderTopLeftRadius: 20,
//                         height: 50,
//                         paddingBottom: 5,
//                     }
//                 }}>
//                 <Tab.Screen name="Anasayfa" component={HomeScreen} />
//                 <Tab.Screen name="Profil" component={screen2} />
//             </Tab.Navigator>
//         </NavigationContainer>
//     );
// }

// const styles = StyleSheet.create({
//     card: {
//         width: '90%',
//         height: 140,
//         borderTopRightRadius: 25,
//         borderBottomRightRadius: 25,
//         backgroundColor: '#f0f0f0',
//         flexDirection: 'row',
//         flex: 1,
//         marginTop: 10,
//         marginBottom: 5,
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 5,
//         },
//         shadowOpacity: 1,
//         shadowRadius: 3.84,
//         elevation: 10,
//     },
//     left: {
//         alignItems: 'flex-start',
//         flex: 7,
//         justifyContent: 'center',
//         marginLeft: 10,
//         marginRight: 10

//     },
//     right: {
//         alignItems: 'flex-end',
//         height: 140,
//         flex: 5,
//     },
//     rightImage: {
//         height: 140,
//         width: '100%',
//         resizeMode: 'stretch',
//         borderBottomLeftRadius: 120,
//         borderTopRightRadius: 80,
//         borderBottomRightRadius: 80
//     },
//     header: {
//         flex: 1,
//         // marginTop: 50,
//         marginHorizontal: 10,
//         marginBottom: 5,
//         flexDirection: 'row'

//     },
//     headerText: {
//         fontSize: 28,
//         fontWeight: 'bold',
//         lineHeight: 50,
//         color: '#fdfdfd'
//     }
// })

import React, { Component } from 'react';
import { Text, View, Image, SafeAreaView, ScrollView, TouchableOpacity, StyleSheet,ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Actions } from 'react-native-router-flux';
import { logout } from '../service/loginFetch';
import ProfileScreen from './profile';
import CustomHeader from '../customHeader';
function HomeScreen() {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
             <ImageBackground
                source={require('../../assets/images/bg.jpg')}
                style={styles.ImageContainer}
            >
             <CustomHeader title="Anasayfa" isHome={true} color={"teal"}  />
            <ScrollView>
                <View style={{marginBottom:20}}>
                <TouchableOpacity style={styles.card}  onPress={() => Actions.purchaseOrderList()}>
                    <View style={styles.left}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Satın Alma Talepleri</Text>
                        <Text>Satın Alma Talepleri</Text>
                    </View>
                    <View style={styles.right}>
                        <Image source={require("../../assets/images/bg.jpg")} style={styles.rightImage} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <View style={styles.left}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Satın Alma Siparişleri</Text>
                        <Text>Satın Alma Siparişleri</Text>
                    </View>
                    <View style={styles.right}>
                        <Image source={require("../../assets/images/bg.jpg")} style={styles.rightImage} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <View style={styles.left}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Teklif Onayı</Text>
                        <Text>Teklif Onayı</Text>
                    </View>
                    <View style={styles.right}>
                        <Image source={require("../../assets/images/bg.jpg")} style={styles.rightImage} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <View style={styles.left}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Malzeme Talepleri</Text>
                        <Text>Malzeme Talepleri</Text>
                    </View>
                    <View style={styles.right}>
                        <Image source={require("../../assets/images/bg.jpg")} style={styles.rightImage} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <View style={styles.left}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Hizmet Teslimalma</Text>
                        <Text>Hizmet Teslimalma</Text>
                    </View>
                    <View style={styles.right}>
                        <Image source={require("../../assets/images/bg.jpg")} style={styles.rightImage} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <View style={styles.left}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Aşamalı Hizmet Onayı</Text>
                        <Text>Aşamalı Hizmet Onayı</Text>
                    </View>
                    <View style={styles.right}>
                        <Image source={require("../../assets/images/bg.jpg")} style={styles.rightImage} />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity style={styles.card}>
                    <View style={styles.left}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Fatura Ödemeleri</Text>
                        <Text>Fatura Ödemeleri</Text>
                    </View>
                    <View style={styles.right}>
                        <Image source={require("../../assets/images/bg.jpg")} style={styles.rightImage} />
                    </View>
                </TouchableOpacity>
           
                </View>
                </ScrollView>
                </ImageBackground>
        </SafeAreaView>

    );
}

// function ProfileScreen() {
//     return (
//         <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//             <Text>Settings!</Text>
//         </View>
//     );
// }

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Anasayfa') {
                            iconName = focused
                                ? require('../../assets/images/home1.png')
                                : require('../../assets/images/home2.png')
                        } else if (route.name === 'Profil') {
                            iconName = focused
                                ? require('../../assets/images/man2.png')
                                : require('../../assets/images/man1.png')
                        }

                        return <Image source={iconName} style={{ width: 20, height: 20 }} resizeMode="contain" size={size} color={color} />;
                    },
                })}
                
                tabBarComponent='TabBarBottomKeyboardAware'
                initialRouteName="Anasayfa"
                tabBarOptions={{
                    activeTintColor: 'black',
                    inactiveTintColor: 'gray',
                    style: {
                        backgroundColor: 'white',
                        borderTopWidth: 1,
                        backgroundColor: '#FFFFff',
                        borderTopRightRadius: 20,
                        borderTopLeftRadius: 20,
                        height: 50,
                        paddingBottom: 5,
                    }
                }}>
                <Tab.Screen name="Anasayfa" component={HomeScreen} />
                <Tab.Screen name="Profil" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}



const styles = StyleSheet.create({
    ImageContainer: {
        flex: 1,
        padding: 0,
        zIndex: 1,
    },
    card: {
        width: '90%',
        height: 130,
        backgroundColor: '#f0f0f0',
        flexDirection: 'row',
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        borderRadius: 20,
        marginTop: 20
    },
    left: {
        alignItems: 'flex-start',
        flex: 7,
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 15,

    },
    right: {
        alignItems: 'flex-end',
        height: 130,
        flex: 5,
    },
    rightImage: {
        height: 100,
        width: '100%',
        resizeMode: 'stretch',
        marginTop: 'auto',
        marginBottom: 'auto',
        marginRight: 10,
        borderRadius: 30
    },
    header: {
        flex: 1,
        marginHorizontal: 10,
        marginBottom: 5,
        flexDirection: 'row'

    },
    headerText: {
        fontSize: 28,
        fontWeight: 'bold',
        lineHeight: 50,
        color: '#fdfdfd'
    }
})