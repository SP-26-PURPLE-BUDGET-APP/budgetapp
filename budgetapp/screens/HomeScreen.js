import React from 'react';
import {Text, View, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';



const screenWidth=Dimensions.get('window').width;
const separator =() => (
    <View style={styles.contain}>
        <View/>
        <View style={styles.leftLine} />
            <Text style={styles.or}>Or</Text>
        <View style={styles.rightLine} />
        <View/>
    </View>
);

function HomeScreen({navigation}) {
    return (
        <View style={styles.container}>
            <View>
            <Image 
                    style={styles.homeImage}
                    source={require('../assets/img/homescreenimage.png')}
                />
            </View>

            <View style={styles.introduction}>
                <Text style={styles.welcome}>WELCOME TO </Text>
                <Text style={styles.moneyFlow}>MoneyFlow</Text>
            </View>

           
            <View>
                <TouchableOpacity
                    style={styles.button1}
                    onPress={()=>navigation.navigate("signin")}
                >
                    <Text style={styles.text1}>Sign in</Text>
                </TouchableOpacity>
            </View>

                {separator()}

            <View>
            <TouchableOpacity
                    style={styles.button2}
                    onPress={()=>navigation.navigate("signup")}
                >
                    <Text style={styles.text2}>Sign up</Text>
                </TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity
                onPress={()=>navigation.navigate("resetpassword")}
                style={styles.passwordLink}
                >
                <Text style={styles.password}>Forgot Password</Text>

                </TouchableOpacity>
            </View>
            
        </View>
        
    );
}

const styles=StyleSheet.create({
    container:{
        alignItems:'center',
       
    },

    //Image at the Homepage (Purple Image)
    homeImage:{
        width: screenWidth,
        height: 350,
    },

     //Welcome to MoneyFlow styles
    introduction:{
        flexDirection:'row',
        justifyContent:'center',
        top: 20,
    },
    welcome:{
        fontSize:18,
    },
    moneyFlow:{
        fontStyle:'italic',
        fontSize:18,
        color:'#A385DB',
    },
    
    //Style for "Sign in" button
    button1:{
        top: 120,
        width: 300,
        height:40,
        backgroundColor: "#A385DB",
        borderRadius:24,
        alignItems: 'center',
        justifyContent:'center'
        
    },
    text1: {
        color:'#FFFFFF',
        fontSize: 15,  
    },
    
    //Style for "Sign up" button
    button2:{
        top:140,
        width: 300,
        height:40,
        backgroundColor: "#FFFFFF",
        borderRadius:24,
        borderColor:'#707070',
        alignItems: 'center',
        justifyContent:'center',
    }, 
    text2:{
        color:'#A385DB',
    },

    //Style for separation line
    contain:{
        flexDirection:'row',
        alignItems:'center',
        top:130,
    },
    leftLine:{
        flex:1,
        backgroundColor:'#707070',
        height:0.5,
        marginLeft:55
    },
    rightLine:{
        flex:1,
        backgroundColor:'#707070',
        height:0.5,
        marginRight:55

    },
    or:{
        color:'#707070'
    },

    //Password style
    password:{
        top:235,
        color:'#587D98',
        textDecorationLine:'underline',
    }
});
export default HomeScreen;