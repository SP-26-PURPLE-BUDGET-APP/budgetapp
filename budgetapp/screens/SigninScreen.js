import React from 'react';
import { useState} from 'react';
import {Text, StyleSheet, View, Button, TextInput, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import CustomInput from '../Component/CustomInput';


function SigninScreen({navigation}) {

    const [email, setEmail]=useState("");
    const [password, setPassword]= useState("");

    return (
        <View style={styles.container}>

            
            <View></View>

            
            <View style={styles.intro}>
                <Text style={styles.welcome}>WELCOME {'\n'}BACK </Text>
            </View>

            <View style={styles.contain}>
                
            {/*Input Email and password*/}
            <View style={styles.email}>
            <CustomInput placeholder="Email" value={email} setValue={setEmail}/>
            </View>

            <View style={styles.password}>
            <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}/>
            </View>
            
            {/*Sign in button*/}
            <View>
                <TouchableOpacity
                    style={styles.button}
                    onPress={()=>navigation.navigate("main")}
                >
                    <Text style={styles.text}>Sign in</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity>
                <Text style={styles.forgot}>Forgot Password</Text>
                </TouchableOpacity>
            </View>
            </View>

        </View>
    );
}

const styles=StyleSheet.create({
    container:{
        justifyContent:'center',
        
        
    },

    intro:{
        marginTop:100,
        marginLeft:30,
    },
    welcome:{
        fontSize:25,
        color: '#A385DB'
    },

    contain:{
        alignItems: 'center',
    },

    //email section style
   
    email:{
        marginTop:110,
        alignItems:'center',
    },
    password:{
        top:10,
        alignItems:'center'
    },

    //Sign in button
    button:{
        top: 115,
        width: 300,
        height:40,
        backgroundColor: "#A385DB",
        borderRadius:24,
        alignItems: 'center',
        justifyContent:'center'
        
    },
    text: {
        color:'#FFFFFF',
        fontSize: 15,  
    },

    forgot:{
        top:300,
        color:'#587D98',
        textDecorationLine:'underline',
    },
    

});

export default SigninScreen;