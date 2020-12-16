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
export default class PurchaseOrderListScreen extends Component {
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
                console.log("successssssss:",responsejson.success)
                if(responsejson.success==true)
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
                source={require('../../assets/images/ust.png')}
                style={styles.ImageContainer}
            >
                <View>
                    <CustomHeader title="Satın Alma Talepleri" isHome={false} color={"white"} navigation={this.props.navigation} />
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text>Satın Alma Talepleri</Text>
                        </View>
                        <View>
                            <Switch
                                onValueChange={isSwitchOn =>
                                    this.toggle({ isSwitchOn }, "PurchaseReqLine")
                                }
                                value={this.state.PurchaseReqLine}
                                trackColor={{ false: 'gray', true: 'yellow' }}
                                thumbColor="white"
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text>Satın Alma Siparişleri</Text>
                        </View>
                        <View>
                            <Switch
                                onValueChange={isSwitchOn =>
                                    this.toggle({ isSwitchOn }, "PurchaseOrder")
                                }
                                value={this.state.PurchaseOrder}
                                trackColor={{ false: 'gray', true: 'yellow' }}
                                thumbColor="white"
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text>Teklif Onayı</Text>
                        </View>
                        <View>
                            <Switch
                                onValueChange={isSwitchOn =>
                                    this.toggle({ isSwitchOn }, "QuotationLinePart")
                                }
                                value={this.state.QuotationLinePart}
                                trackColor={{ false: 'gray', true: 'yellow' }}
                                thumbColor="white"
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text>Malzeme Talepleri</Text>
                        </View>
                        <View>
                            <Switch
                                onValueChange={isSwitchOn =>
                                    this.toggle({ isSwitchOn }, "MaterialRequisition")
                                }
                                value={this.state.MaterialRequisition}
                                trackColor={{ false: 'gray', true: 'yellow' }}
                                thumbColor="white"
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text>Hizmet Teslimalma</Text>
                        </View>
                        <View>
                            <Switch
                                onValueChange={isSwitchOn =>
                                    this.toggle({ isSwitchOn }, "HizmetBaslik")
                                }
                                value={this.state.HizmetBaslik}
                                trackColor={{ false: 'gray', true: 'yellow' }}
                                thumbColor="white"
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text>Aşamalı Hizmet Onayı</Text>
                        </View>
                        <View>
                            <Switch
                                onValueChange={isSwitchOn =>
                                    this.toggle({ isSwitchOn }, "PurchseOrderMilestoneLine")
                                }
                                value={this.state.PurchseOrderMilestoneLine}
                                trackColor={{ false: 'gray', true: 'yellow' }}
                                thumbColor="white"
                            />
                        </View>
                    </View>
                    
                    <View style={{ flexDirection: 'row' }}>
                        <View style={{ justifyContent: 'center' }}>
                            <Text>Fatura Ödemeleri</Text>
                        </View>
                        <View>
                            <Switch
                                onValueChange={isSwitchOn =>
                                    this.toggle({ isSwitchOn }, "InvoiceForPayment")
                                }
                                value={this.state.InvoiceForPayment}
                                trackColor={{ false: 'gray', true: 'yellow' }}
                                thumbColor="white"
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        )
    }
}
const styles = StyleSheet.create({
    ImageContainer: {
        flex: 1,
        padding: 0,
        zIndex: 1,
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
    }
})