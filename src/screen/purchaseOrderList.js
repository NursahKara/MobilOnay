import React, { Component } from 'react';
import {
    StyleSheet,ScrollView,View,Text,
    TouchableOpacity,ImageBackground,
    Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import CustomHeader from '../customHeader';
const { width, height } = Dimensions.get("screen");
export default class PurchaseOrderListScreen extends Component {
    render() {
        return (
            <ImageBackground
                source={require('../../assets/images/ust.png')}
                style={styles.ImageContainer}
            >
                <View>
                    <CustomHeader title="Satın Alma Talepleri" isHome={false} bg_white={true} navigation={this.props.navigation} />
                    <ScrollView style={{ marginTop: 100,marginBottom:70}}>
                        <TouchableOpacity
                            onPress={() => Actions.purchaseOrderList()}
                            style={styles.card}>
                            <View style={{ flexDirection: 'row',marginBottom:5, flex:1 }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Sipariş No: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' ,flex:9}}>70772 </Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginBottom:5, flex:1 }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Tedarikçi : </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', flex:9 }}>NALCO ANADOLU KİMYA SAN. VE TİC. LTD. ŞTİ. </Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginBottom:5, flex:1  }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Site : </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold',flex:9 }}>LOTUS </Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginBottom:5 , flex:1}}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>İhtiyaç Tarihi: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold',flex:9 }}>01.12.2020 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Actions.purchaseOrderList()}
                            style={styles.card}>
                            <View style={{ flexDirection: 'row',marginBottom:5, flex:1 }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Sipariş No: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' ,flex:9}}>70772 </Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginBottom:5, flex:1 }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Tedarikçi : </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', flex:9 }}>NALCO ANADOLU KİMYA SAN. VE TİC. LTD. ŞTİ. </Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginBottom:5, flex:1  }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Site : </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold',flex:9 }}>LOTUS </Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginBottom:5 , flex:1}}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>İhtiyaç Tarihi: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold',flex:9 }}>01.12.2020 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Actions.purchaseOrderList()}
                            style={styles.card}>
                            <View style={{ flexDirection: 'row',marginBottom:5, flex:1 }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Sipariş No: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' ,flex:9}}>70772 </Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginBottom:5, flex:1 }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Tedarikçi : </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', flex:9 }}>NALCO ANADOLU KİMYA SAN. VE TİC. LTD. ŞTİ. </Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginBottom:5, flex:1  }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Site : </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold',flex:9 }}>LOTUS </Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginBottom:5 , flex:1}}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>İhtiyaç Tarihi: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold',flex:9 }}>01.12.2020 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Actions.purchaseOrderList()}
                            style={styles.card}>
                            <View style={{ flexDirection: 'row',marginBottom:5, flex:1 }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Sipariş No: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' ,flex:9}}>70772 </Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginBottom:5, flex:1 }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Tedarikçi : </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', flex:9 }}>NALCO ANADOLU KİMYA SAN. VE TİC. LTD. ŞTİ. </Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginBottom:5, flex:1  }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Site : </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold',flex:9 }}>LOTUS </Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginBottom:5 , flex:1}}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>İhtiyaç Tarihi: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold',flex:9 }}>01.12.2020 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Actions.purchaseOrderList()}
                            style={styles.card}>
                            <View style={{ flexDirection: 'row',marginBottom:5, flex:1 }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Sipariş No: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' ,flex:9}}>70772 </Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginBottom:5, flex:1 }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Tedarikçi : </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', flex:9 }}>NALCO ANADOLU KİMYA SAN. VE TİC. LTD. ŞTİ. </Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginBottom:5, flex:1  }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Site : </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold',flex:9 }}>LOTUS </Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginBottom:5 , flex:1}}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>İhtiyaç Tarihi: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold',flex:9 }}>01.12.2020 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Actions.purchaseOrderList()}
                            style={styles.card}>
                            <View style={{ flexDirection: 'row',marginBottom:5, flex:1 }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Sipariş No: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' ,flex:9}}>70772 </Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginBottom:5, flex:1 }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Tedarikçi : </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', flex:9 }}>NALCO ANADOLU KİMYA SAN. VE TİC. LTD. ŞTİ. </Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginBottom:5, flex:1  }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Site : </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold',flex:9 }}>LOTUS </Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginBottom:5 , flex:1}}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>İhtiyaç Tarihi: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold',flex:9 }}>01.12.2020 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Actions.purchaseOrderList()}
                            style={styles.card}>
                            <View style={{ flexDirection: 'row',marginBottom:5, flex:1 }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Sipariş No: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' ,flex:9}}>70772 </Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginBottom:5, flex:1 }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Tedarikçi : </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', flex:9 }}>NALCO ANADOLU KİMYA SAN. VE TİC. LTD. ŞTİ. </Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginBottom:5, flex:1  }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Site : </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold',flex:9 }}>LOTUS </Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginBottom:5 , flex:1}}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>İhtiyaç Tarihi: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold',flex:9 }}>01.12.2020 </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => Actions.purchaseOrderList()}
                            style={styles.card}>
                            <View style={{ flexDirection: 'row',marginBottom:5, flex:1 }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Sipariş No: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold' ,flex:9}}>70772 </Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginBottom:5, flex:1 }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Tedarikçi : </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold', flex:9 }}>NALCO ANADOLU KİMYA SAN. VE TİC. LTD. ŞTİ. </Text>
                            </View>
                            <View style={{ flexDirection: 'row',marginBottom:5, flex:1  }}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>Site : </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold',flex:9 }}>LOTUS </Text>
                            </View>
                            <View style={{ flexDirection: 'row' ,marginBottom:5 , flex:1}}>
                                <Text style={{ fontSize: 12, color: '#514bb5',flex:3 }}>İhtiyaç Tarihi: </Text>
                                <Text style={{ fontSize: 12, fontWeight: 'bold',flex:9 }}>01.12.2020 </Text>
                            </View>
                        </TouchableOpacity>
                      </ScrollView>
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