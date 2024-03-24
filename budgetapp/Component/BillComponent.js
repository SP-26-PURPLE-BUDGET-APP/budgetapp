import React from 'react';
import {View, Text, StyleSheet} from 'react-native';



const BillTransaction =({label, value})=>{
//determine the text color based on value
const textColor=value>0 ? '#2BAF45' : '#E3172F'

//Format the amount value
const formattedValue=`${value >= 0 ? '+' : '-'}$${Math.abs(value).toFixed(2)}`;

    return(
        <View style={styles.container}>
            <View>
                <Text style={[styles.label, {color:textColor}]}>{label}</Text>
            </View>
            <View>
                <Text style={[styles.value, {color:textColor}]}>{formattedValue}</Text>
            </View>
            
        </View>
    )
};

const styles=StyleSheet.create({
    container:{
        
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'rgba(112, 112, 112, 0.1)',
        height:55, 
        borderRadius:34,
        width:330,

        
      
        
       
    },
    label:{
        marginLeft:20,
        alignItem:'center',
        fontSize: 18,

    },
    value:{
        marginRight:20,
        fontSize:18
    }

});
export default BillTransaction;