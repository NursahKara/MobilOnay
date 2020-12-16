//bu dosyada tüm navigasyon işlemleri dönecek
import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LoginScreen from './screens/login';
import HomeScreen from './screens/home';
import PurchaseOrderListScreen from './screens/purchaseOrderList';
import screen2 from './screens/screen2';

const RouterComp = () => {
    return (
        <Router titleStyle={{ color: '#000' }}  >
            <Scene key='root' hideNavBar={true}>
                <Scene key='main'>
                    <Scene key='login'
                        component={LoginScreen}
                        title='Login'
                        hideNavBar={true}
                        initial
                    />
                    <Scene key='home'
                        component={HomeScreen}
                        title='Home'
                        hideNavBar={true}
                    />
                    <Scene key='purchaseOrderList'
                        component={PurchaseOrderListScreen}
                        title='PurchaseOrderList'
                        hideNavBar={true}
                    />
                    <Scene key='screen2'
                        component={screen2}
                        title='PurchaseOrderList'
                        hideNavBar={true}
                    />
                </Scene>


            </Scene>
        </Router>
    )
}
export default RouterComp