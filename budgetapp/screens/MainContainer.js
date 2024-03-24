import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faReceipt, faChartSimple, faUser } from '@fortawesome/free-solid-svg-icons';
import Calendar from '../Component/Calendar';
//Import Screens
import DashboardScreen from './navigation/DashboardScreen';
import InsightScreen from './navigation/InsightScreen';
import ProfileScreen from './navigation/ProfileScreen';
import TransactionScreen from './navigation/TransactionScreen';

//Screen names
const dashboard='Home';
const transaction='Transaction';
const insight='Insight';
const profile='Profile';


const tab=createBottomTabNavigator();
const MainContainer =()=>{
    return(
        <View style={{flex:1}}>
            <Calendar/>
            <tab.Navigator
            initialRouteName='dashboard'
            screenOptions={({route})=> ({
                headerShown:false,
                activeTintColor:'#A385DB', //color of the text when the tab is active
                inactiveTintColor:'gray', //color of the text when tab is inactive
                tabBarIcon: ({focused, color,size}) =>{
                    let iconName;
                    let rn = route.name;

                    if(rn === dashboard){
                        iconName= faHome;
                    }else if (rn===transaction){
                        iconName=faReceipt;
                    } else if(rn ===insight){
                        iconName= faChartSimple;
                    }else if (rn===profile){
                        iconName=faUser;
                    };;
                    return <FontAwesomeIcon icon={iconName} size={size} color={focused ? '#A385DB':color} />;

            }})}
            
            >

                <tab.Screen name={dashboard} component={DashboardScreen}/>
                <tab.Screen name={transaction} component={TransactionScreen}/>
                <tab.Screen name={insight} component={InsightScreen}/>
                <tab.Screen name={profile} component={ProfileScreen}/>
               
            </tab.Navigator>
         </View>
    )
};

const styles=StyleSheet.create({

});
export default MainContainer;