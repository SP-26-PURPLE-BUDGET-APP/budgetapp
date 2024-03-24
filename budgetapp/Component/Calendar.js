import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faAngleDoubleLeft,  faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';


const Calendar = () =>{

const [currentMonth, setCurrentMonth]=useState(0);
const months=['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const handleNextMonth= ()=>{
    if(currentMonth<11){
        setCurrentMonth(currentMonth+1);
    }
};

const handlePreviousMonth =()=>{
    if(currentMonth>0){
        setCurrentMonth(currentMonth-1);
    }
};
    return(
        <View style={styles.container}>

            {/*First icon: angle-left*/}
            <TouchableOpacity onPress={handlePreviousMonth} style={styles.left}>
                <FontAwesomeIcon icon={faAngleDoubleLeft} style={styles.icon} />
            </TouchableOpacity>

            {/*Display months*/}
            <Text style={styles.month}> {months[currentMonth]} 2024 </Text>

            {/*First icon: angle-left*/}
            <TouchableOpacity onPress={handleNextMonth} style={styles.right}>
                <FontAwesomeIcon icon={faAngleDoubleRight} style={styles.icon} />
            </TouchableOpacity>
        </View>
    )
};

const styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center',
        height: 45,
        backgroundColor:'#A385DB',
    },
    month:{
        color:'#FFFFFF',
        fontSize: 23,
    },
    left:{
        marginRight: 20,
    
    },
    right:{
        marginLeft: 20,
    
    },
    icon:{
        color:'#FFFFFF',
        fontSize: 25
    }
});

export default Calendar;