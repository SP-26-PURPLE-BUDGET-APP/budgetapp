import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text} from 'react-native';

const LongButton = ({value}) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
            >
                {/*onPress={()=>navigation.navigate("signin")}*/}
            
                <Text style={styles.text}>{value}</Text>
            </TouchableOpacity>
        </View>

    )
};

const styles= StyleSheet.create({
    container:{
        alignItems:'center',
    },
    button:{
        top: 130,
        width: 300,
        height:40,
        backgroundColor: "#A385DB",
        borderRadius:24,
        alignItems: 'center',
        justifyContent:'center'
    },
    text:{
        color:'#FFFFFF',
    }
});



export default LongButton;