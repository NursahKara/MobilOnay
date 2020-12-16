import React, { Component } from 'react';
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
    Switch
} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";
import { Actions } from 'react-native-router-flux';
import CustomHeader from '../customHeader';
const { width, height } = Dimensions.get("screen");
export default class ProfileScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            PurchaseReqLine: true,
            PurchaseOrder: true,
            QuotationLinePart: true,
            MaterialRequisition: true,
            HizmetBaslik: true,
            PurchseOrderMilestoneLine: true,
            InvoiceForPayment: true,
        }
    }

    componentDidMount() {
        this.readStore();
    }
    toggle(item, index) {
        console.log("indexxxxxxxxxxx:::::", index)
        const { PurchaseReqLine, PurchaseOrder, QuotationLinePart, MaterialRequisition, HizmetBaslik, PurchseOrderMilestoneLine, InvoiceForPayment } = this.state;
        if (index == "PurchaseReqLine")
            this.setState({ PurchaseReqLine: !PurchaseReqLine })
        else if (index == "PurchaseOrder")
            this.setState({ PurchaseOrder: !PurchaseOrder })
        else if (index == "QuotationLinePart")
            this.setState({ QuotationLinePart: !QuotationLinePart })
        else if (index == "MaterialRequisition")
            this.setState({ MaterialRequisition: !MaterialRequisition })
        else if (index == "HizmetBaslik")
            this.setState({ HizmetBaslik: !HizmetBaslik })
        else if (index == "PurchseOrderMilestoneLine")
            this.setState({ PurchseOrderMilestoneLine: !PurchseOrderMilestoneLine })
        else if (index == "InvoiceForPayment")
            this.setState({ InvoiceForPayment: !InvoiceForPayment })

        this.setNotificationType(index);
    }
    setNotificationType = async (index) => {
        const tokenValueRaw = await AsyncStorage.getItem("token");
        const tokenValue = JSON.parse(tokenValueRaw) ?? [];

        fetch('http://192.168.41.182/NotificationWebService/SwitchNotificationSetting?notificationType=' + index, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'bearer ' + ' ' + tokenValue
            }),
        })
            .then((response) => response.json())
            .then((responsejson) => {
                console.log("successssssss:", responsejson.success)
                if (responsejson.success == true)
                    this.storeType();
            })
            .catch((error) => console.error(error))
    }

    storeType = async () => {
        const { PurchaseReqLine, PurchaseOrder, QuotationLinePart, MaterialRequisition, HizmetBaslik, PurchseOrderMilestoneLine, InvoiceForPayment } = this.state;
        try {
            await AsyncStorage.setItem('PurchaseReqLine', JSON.stringify(PurchaseReqLine));
            await AsyncStorage.setItem('PurchaseOrder', JSON.stringify(PurchaseOrder));
            await AsyncStorage.setItem('QuotationLinePart', JSON.stringify(QuotationLinePart));
            await AsyncStorage.setItem('MaterialRequisition', JSON.stringify(MaterialRequisition));
            await AsyncStorage.setItem('HizmetBaslik', JSON.stringify(HizmetBaslik));
            await AsyncStorage.setItem('PurchseOrderMilestoneLine', JSON.stringify(PurchseOrderMilestoneLine));
            await AsyncStorage.setItem('InvoiceForPayment', JSON.stringify(InvoiceForPayment));
            console.log("PR", JSON.stringify(PurchaseReqLine))
            console.log("PO", JSON.stringify(PurchaseOrder))
        }
        catch (e) {
            console.log("storeToken:", e)
        }
    }
    readStore = async () => {
        console.log("readstoreeeeeeeeeeeeeeeePR", this.state.PurchaseReqLine)
        console.log("readstoreeeeeeeeeeeeeeeePO", this.state.PurchaseOrder)
        try {
            const PurchaseReqLineValueRaw = await AsyncStorage.getItem("PurchaseReqLine");
            const PurchaseReqLine = JSON.parse(PurchaseReqLineValueRaw) ?? [];
            const PurchaseOrderValueRaw = await AsyncStorage.getItem("PurchaseOrder");
            const PurchaseOrderValue = JSON.parse(PurchaseOrderValueRaw) ?? [];
            const QuotationLinePartValueRaw = await AsyncStorage.getItem("QuotationLinePart");
            const QuotationLinePartValue = JSON.parse(QuotationLinePartValueRaw) ?? [];
            const MaterialRequisitionValueRaw = await AsyncStorage.getItem("MaterialRequisition");
            const MaterialRequisitionValue = JSON.parse(MaterialRequisitionValueRaw) ?? [];
            const HizmetBaslikValueRaw = await AsyncStorage.getItem("HizmetBaslik");
            const HizmetBaslikValue = JSON.parse(HizmetBaslikValueRaw) ?? [];
            const PurchseOrderMilestoneLineValueRaw = await AsyncStorage.getItem("PurchseOrderMilestoneLine");
            const PurchseOrderMilestoneLineValue = JSON.parse(PurchseOrderMilestoneLineValueRaw) ?? [];
            const InvoiceForPaymentValueRaw = await AsyncStorage.getItem("InvoiceForPayment");
            const InvoiceForPaymentValue = JSON.parse(InvoiceForPaymentValueRaw) ?? [];

            this.setState({
                PurchaseReqLine: PurchaseReqLine,
                PurchaseOrder: PurchaseOrderValue,
                QuotationLinePart: QuotationLinePartValue,
                MaterialRequisition: MaterialRequisitionValue,
                HizmetBaslik: HizmetBaslikValue,
                PurchseOrderMilestoneLine: PurchseOrderMilestoneLineValue,
                InvoiceForPayment: InvoiceForPaymentValue
            })

        } catch (e) {
            console.error(e)
        }
    }

    render() {
        console.log("renderrrrrrrrrrrrr", this.state.PurchaseReqLine)
        return (
            <ImageBackground
                source={require('../../assets/images/bg.jpg')}
                style={styles.ImageContainer}
            >

                <CustomHeader title="Profil" isHome={true} color={"teal"} navigation={this.props.navigation} />

                <View style={{ marginVertical: 30 }}>
                    {/* <Image style={styles.avatar}  source={require('../../assets/images/avatar.png')}/> */}
                    <View style={{ alignItems: 'center' }}>
                        <Text style={styles.name}>Kullanıcı Adı</Text>

                    </View>
                    <View>
                     
                        <View style={{ backgroundColor: '#f0f0f0', borderRadius: 20, width: '90%', marginRight: 'auto', marginLeft: 'auto', paddingVertical: 20 }}>
                        <View style={{ marginLeft: 20, marginBottom: 20 }}>
                            <Text style={{ color: 'teal', fontSize: 20 }}>Bildirim Ayarları</Text>
                        </View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.viewBaslik}>
                                    <Text style={styles.textBaslik}>Satın Alma Talepleri</Text>
                                </View>
                                <View style={{ flex: 6, marginRight: 80 }}>
                                    <Switch
                                        onValueChange={isSwitchOn =>
                                            this.toggle({ isSwitchOn }, "PurchaseReqLine")
                                        }
                                        value={this.state.PurchaseReqLine}
                                        trackColor={{ false: 'gray', true: '#6b1f6c' }}
                                        thumbColor="white"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.viewBaslik}>
                                    <Text style={styles.textBaslik}>Satın Alma Siparişleri</Text>
                                </View>
                                <View style={{ flex: 6, marginRight: 80 }}>
                                    <Switch
                                        onValueChange={isSwitchOn =>
                                            this.toggle({ isSwitchOn }, "PurchaseOrder")
                                        }
                                        value={this.state.PurchaseOrder}
                                        trackColor={{ false: 'gray', true: '#6b1f6c' }}
                                        thumbColor="white"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.viewBaslik}>
                                    <Text style={styles.textBaslik}>Teklif Onayı</Text>
                                </View>
                                <View style={{ flex: 6, marginRight: 80 }}>
                                    <Switch
                                        onValueChange={isSwitchOn =>
                                            this.toggle({ isSwitchOn }, "QuotationLinePart")
                                        }
                                        value={this.state.QuotationLinePart}
                                        trackColor={{ false: 'gray', true: '#6b1f6c' }}
                                        thumbColor="white"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.viewBaslik}>
                                    <Text style={styles.textBaslik}>Malzeme Talepleri</Text>
                                </View>
                                <View style={{ flex: 6, marginRight: 80 }}>
                                    <Switch
                                        onValueChange={isSwitchOn =>
                                            this.toggle({ isSwitchOn }, "MaterialRequisition")
                                        }
                                        value={this.state.MaterialRequisition}
                                        trackColor={{ false: 'gray', true: '#6b1f6c' }}
                                        thumbColor="white"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.viewBaslik}>
                                    <Text style={styles.textBaslik}>Hizmet Teslimalma</Text>
                                </View>
                                <View style={{ flex: 6, marginRight: 80 }}>
                                    <Switch
                                        onValueChange={isSwitchOn =>
                                            this.toggle({ isSwitchOn }, "HizmetBaslik")
                                        }
                                        value={this.state.HizmetBaslik}
                                        trackColor={{ false: 'gray', true: '#6b1f6c' }}
                                        thumbColor="white"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.viewBaslik}>
                                    <Text style={styles.textBaslik}>Aşamalı Hizmet Onayı</Text>
                                </View>
                                <View style={{ flex: 6, marginRight: 80 }}>
                                    <Switch
                                        onValueChange={isSwitchOn =>
                                            this.toggle({ isSwitchOn }, "PurchseOrderMilestoneLine")
                                        }
                                        value={this.state.PurchseOrderMilestoneLine}
                                        trackColor={{ false: 'gray', true: '#6b1f6c' }}
                                        thumbColor="white"
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.viewBaslik}>
                                    <Text style={styles.textBaslik}>Fatura Ödemeleri</Text>
                                </View>
                                <View style={{ flex: 6, marginRight: 80 }}>
                                    <Switch
                                        onValueChange={isSwitchOn =>
                                            this.toggle({ isSwitchOn }, "InvoiceForPayment")
                                        }
                                        value={this.state.InvoiceForPayment}
                                        trackColor={{ false: 'gray', true: '#6b1f6c' }}
                                        thumbColor="white"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
            </ImageBackground>
            // <SafeAreaView>
            //     <View style={styles.container}>
            //         <View style={styles.header}></View>
            //         <Image style={styles.avatar} source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar6.png' }} />
            //         <View style={styles.body}>
            //             <View style={styles.bodyContent}>
            //                 <Text style={styles.name}>Kullanıcı Adı</Text>
            //                 {/* <Text style={styles.info}>UX Designer / Mobile developer</Text>
            //                 <Text style={styles.description}>Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum electram expetendis, omittam deseruisse consequuntur ius an,</Text> */}
            //                 {/* 
            //                 <TouchableOpacity style={styles.buttonContainer}>
            //                     <Text>Opcion 1</Text>
            //                 </TouchableOpacity>
            //                 <TouchableOpacity style={styles.buttonContainer}>
            //                     <Text>Opcion 2</Text>
            //                 </TouchableOpacity> */}

            //             </View>


            //         </View>
            //         <View style={{borderTopLeftRadius:50,borderWidth:1,borderColor:'gray',borderBottomColor:'white',marginTop: 50,borderTopRightRadius:50,}}>


            //         <View style={{  marginHorizontal: 10,marginTop: 20, }}>
            //             <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Bildirim Ayarları</Text>
            //             <View style={{ borderBottomWidth: 0.2, borderColor: 'gray' }}></View>

            //         </View>
            //         <View style={{ flexDirection: 'row', marginTop: 30,marginHorizontal: 10, }}>
            //             <View style={{ justifyContent: 'center' }}>
            //                 <Text>Satın Alma Talepleri</Text>
            //             </View>
            //             <View style={{flex:6,marginRight:120}}>
            //                 <Switch
            //                     onValueChange={isSwitchOn =>
            //                         this.toggle({ isSwitchOn }, "PurchaseReqLine")
            //                     }
            //                     value={this.state.PurchaseReqLine}
            //                     trackColor={{ false: 'gray', true: '#6b1f6c' }}
            //                     thumbColor="white"
            //                 />
            //             </View>
            //         </View>
            //         <View style={{ flexDirection: 'row',marginHorizontal: 10, }}>
            //             <View style={{ justifyContent: 'center' }}>
            //                 <Text>Satın Alma Siparişleri</Text>
            //             </View>
            //             <View style={{flex:6,marginRight:120}}>
            //                 <Switch
            //                     onValueChange={isSwitchOn =>
            //                         this.toggle({ isSwitchOn }, "PurchaseOrder")
            //                     }
            //                     value={this.state.PurchaseOrder}
            //                     trackColor={{ false: 'gray', true: '#6b1f6c' }}
            //                     thumbColor="white"
            //                 />
            //             </View>
            //         </View>
            //         <View style={{ flexDirection: 'row' ,marginHorizontal: 10,}}>
            //             <View style={{ justifyContent: 'center' }}>
            //                 <Text>Teklif Onayı</Text>
            //             </View>
            //             <View style={{flex:6,marginRight:120}}>
            //                 <Switch
            //                     onValueChange={isSwitchOn =>
            //                         this.toggle({ isSwitchOn }, "QuotationLinePart")
            //                     }
            //                     value={this.state.QuotationLinePart}
            //                     trackColor={{ false: 'gray', true: '#6b1f6c' }}
            //                     thumbColor="white"
            //                 />
            //             </View>
            //         </View>
            //         <View style={{ flexDirection: 'row' ,marginHorizontal: 10,}}>
            //             <View style={{ justifyContent: 'center' }}>
            //                 <Text>Malzeme Talepleri</Text>
            //             </View>
            //             <View style={{flex:6,marginRight:120}}>
            //                 <Switch
            //                     onValueChange={isSwitchOn =>
            //                         this.toggle({ isSwitchOn }, "MaterialRequisition")
            //                     }
            //                     value={this.state.MaterialRequisition}
            //                     trackColor={{ false: 'gray', true: '#6b1f6c' }}
            //                     thumbColor="white"
            //                 />
            //             </View>
            //         </View>
            //         <View style={{ flexDirection: 'row' ,marginHorizontal: 10,}}>
            //             <View style={{ justifyContent: 'center' }}>
            //                 <Text>Hizmet Teslimalma</Text>
            //             </View>
            //             <View style={{flex:6,marginRight:120}}>
            //                 <Switch
            //                     onValueChange={isSwitchOn =>
            //                         this.toggle({ isSwitchOn }, "HizmetBaslik")
            //                     }
            //                     value={this.state.HizmetBaslik}
            //                     trackColor={{ false: 'gray', true: '#6b1f6c' }}
            //                     thumbColor="white"
            //                 />
            //             </View>
            //         </View>
            //         <View style={{ flexDirection: 'row' ,marginHorizontal: 10,}}>
            //             <View style={{ justifyContent: 'center' }}>
            //                 <Text>Aşamalı Hizmet Onayı</Text>
            //             </View>
            //             <View style={{flex:6,marginRight:120}}>
            //                 <Switch
            //                     onValueChange={isSwitchOn =>
            //                         this.toggle({ isSwitchOn }, "PurchseOrderMilestoneLine")
            //                     }
            //                     value={this.state.PurchseOrderMilestoneLine}
            //                     trackColor={{ false: 'gray', true: '#6b1f6c' }}
            //                     thumbColor="white"
            //                 />
            //             </View>
            //         </View>
            //         <View style={{ flexDirection: 'row',marginHorizontal: 10, }}>
            //             <View style={{ justifyContent: 'center' }}>
            //                 <Text>Fatura Ödemeleri</Text>
            //             </View>
            //             <View style={{flex:6,marginRight:120}}>
            //                 <Switch
            //                     onValueChange={isSwitchOn =>
            //                         this.toggle({ isSwitchOn }, "InvoiceForPayment")
            //                     }
            //                     value={this.state.InvoiceForPayment}
            //                     trackColor={{ false: 'gray', true: '#6b1f6c' }}
            //                     thumbColor="white"
            //                 />
            //             </View>
            //         </View>
            //         </View>
            //     </View>
            // </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    ImageContainer: {
        flex: 1,
        padding: 0,
        zIndex: 1,
        resizeMode: 'stretch',
    },
    card: {
        width: '95%',
        height: 'auto',
        borderRadius: 25,
        backgroundColor: '#f0f0f0',
        flex: 1,
        marginTop: 10,
        marginBottom: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 5,
        paddingLeft: 20,
        padding: 10,
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    left: {
        alignItems: 'flex-start',
        flex: 7,
        justifyContent: 'center',
        marginLeft: 10,
        marginRight: 10

    },
    cardDetail: {
        flexDirection: 'row',
        flex: 1,
    },
    textBaslik: {
        color: 'black',
        fontSize: 16
    },
    viewBaslik: {
        justifyContent: 'center',
        marginLeft: 20
    },
    notificationCard: {
        width: '90%',
        height: 'auto',
        backgroundColor: '#f0f0f0',
        flex: 1,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 1,
        shadowRadius: 3.84,
        elevation: 10,
        borderRadius: 20,
        marginTop: 20
    },


    // header: {
    //     backgroundColor: "#6b1f6c",
    //     height: 100,
    // },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 63,
        borderWidth: 4,
        borderColor: "white",
        marginBottom: 10,
        alignSelf: 'center',
        marginTop: 10,
        marginBottom: 20
    },
    name: {
        fontSize: 24,
        color: "teal",
        fontWeight: 'bold',
        marginBottom: 30
    },
    // body: {
    //     marginTop: 40,
    // },
    // bodyContent: {
    //     flex: 1,
    //     alignItems: 'center',
    //     padding: 30,
    // },
    // name: {
    //     fontSize: 28,
    //     color: "#696969",
    //     fontWeight: "600"
    // },
    // info: {
    //     fontSize: 16,
    //     color: "#00BFFF",
    //     marginTop: 10
    // },
    // description: {
    //     fontSize: 16,
    //     color: "#696969",
    //     marginTop: 10,
    //     textAlign: 'center'
    // },
    // buttonContainer: {
    //     marginTop: 10,
    //     height: 45,
    //     flexDirection: 'row',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     marginBottom: 20,
    //     width: 250,
    //     borderRadius: 30,
    //     backgroundColor: "#00BFFF",
    // },
})