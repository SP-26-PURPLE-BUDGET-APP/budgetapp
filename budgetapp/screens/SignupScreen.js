import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useState} from 'react';
import CustomInput from '../Component/CustomInput';
import { auth, db } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import {doc, setDoc} from "firebase/firestore";




const SignupScreen =()=>{
    const [email, setEmail]=useState("");
    const [name, setName]=useState("");
    const [password,setPassword]=useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading]= useState(false);

    const handleSignUp = async () =>{
        if(password!==confirmPassword){
            alert("Password do not match!");
            return;
        }
        setLoading(true);
        await createUserWithEmailAndPassword(auth, email, password)
            .then((userCredentials)=>{
                setLoading(false);
                
                //alert("Account created successfully!");
                NavigationPreloadManager.navigate('signin');
                
            })
            
            .catch(error=>alert(error.message));

        
    }
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
                    <CustomInput placeholder="Password" value={password} setValue={setPassword} secureTextEntry={true}  />
                </View>
                <View style={styles.pass}>
                    <CustomInput placeholder="Confirm Password" value={confirmPassword} setValue={setConfirmPassword} secureTextEntry={true}/>
                </View>
            </View>

            <View style={styles.buttonView}>
            <TouchableOpacity
                style={styles.button}
                onPress={handleSignUp}
            >
                <Text style={{color:'#FFFFFF'}}>Sign up</Text>
            </TouchableOpacity>
            </View>
        </View>





        
)};
const styles=StyleSheet.create({
    container:{
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
    buttonView:{
        top:30,
        alignItems: 'center',
        justifyContent:'center'
    },
    button:{
        top: 130,
        width: 300,
        height:40,
        backgroundColor: "#A385DB",
        borderRadius:24,
        alignItems: 'center',
        justifyContent:'center'
    }
    
});


export default SignupScreen;
