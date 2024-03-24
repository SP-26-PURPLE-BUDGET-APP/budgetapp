import React from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import LinkComponent from '../../Component/LinkComponent';
import { useNavigation } from '@react-navigation/native';

const ProfileScreen =()=>{
    const navigation=useNavigation();

    const handleLogout=()=>{
        //navigate to homescreen
        navigation.navigate('home')
    }
    return(
        <View style={styles.container}>
            {/*The profile picture and name*/}
            <View style={styles.imageContainer}>
                <Image source={require('../../assets/img/user.png')} 
                    style={styles.image}
                    resizeMode='contain'
                />
            </View>

            <View style={styles.label}>
                <Text style={{fontSize:20, color:'#A385DB'}}>First Last</Text>
                <Text style={{fontSize:14, color:'rgba(112, 112, 112, 0.8)'}}>students@gmail.com</Text>
            </View>

            <View style={{marginTop: 50}}>
                <LinkComponent label={'Link Bank Account'}/>
                <View style={{marginBottom:10}}/>
                <LinkComponent label={'Change Password'}/>
                <View style={{marginBottom:10}}/>
                <LinkComponent label={'Help and Support'}/>
            </View>

            <View style={{top:90}}>
                <TouchableOpacity onPress={handleLogout}>
                    <LinkComponent label={'Log out'}/>
                </TouchableOpacity>
           
            </View>
        </View>
    )
};

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        
    },
    imageContainer:{
        top:20
        
    },
    image:{
        width:190,
        height:190,
        overflow:'hidden',
        
        
    },
    label:{
        top:20,
        justifyContent:'center',
        alignItems:'center'
        
    }
});
export default ProfileScreen;