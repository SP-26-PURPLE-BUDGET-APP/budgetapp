import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
const LinkComponent = ({label})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{label}</Text>
        </View>
    )
};

const styles=StyleSheet.create({
    container:{
        borderRadius: 24, 
        width: 300,
        height: 50, 
        borderWidth:1,
        alignItems:'center',
        justifyContent:'center', 
        borderColor:'#A385DB'
    },
    text:{
        color:'#707070',
        textDecorationLine:'underline',
    }
}

);
export default LinkComponent;