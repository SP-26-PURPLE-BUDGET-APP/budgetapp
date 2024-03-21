import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useState} from 'react';
import CustomInput from '../Component/CustomInput';
import LongButton from '../Component/LongButton';

const SignupScreen =()=>{
    const [email, setEmail]=useState("");
    const [name, setName]=useState("");
    const [password,setPassword]=useState("");
    return (
        <View style={styles.container}>

            {/*Create account label*/}
            <View style={styles.intro}>
                <Text style={styles.account}>Create {'\n'} Account</Text>
            </View>

            {/*Name, email, password and confirm password*/}
            <View style={styles.input}>
                <View style={styles.name} >
                    <CustomInput placeholder="Name" value={name} setValue={setName}/>
                </View>
                <View style={styles.email}>
                    <CustomInput placeholder="Email" value={email} setValue={setEmail}/>
                </View>
                <View style={styles.password}>
                    <CustomInput placeholder="Password" value={password} setValue={setPassword}  />
                </View>
                <View style={styles.pass}>
                    <CustomInput placeholder="Confirm Password" value={password} setValue={setPassword}/>
                </View>
            </View>

            <View style={styles.button}>
                <LongButton value="Sign up"/>
            </View>




        </View>
        
)};
const styles=StyleSheet.create({
    contrainer:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:"#FFFFFF"
        
    },
    intro:{
        marginTop:100,
       
    
    },
    account:{
        fontSize:25,
        color: '#A385DB',
        marginLeft:30,
    },
    input:{
        top:100,
      
    },
    name:{
        marginTop:10,
        alignItems:'center',
    },
    email:{
        top:10,
        alignItems:'center'
    },
    password:{
        top:20,
        alignItems:'center'
    },
    pass:{
        top:30,
        alignItems:'center'
    },
    button:{
        top: 50
    }
    
});


export default SignupScreen;
