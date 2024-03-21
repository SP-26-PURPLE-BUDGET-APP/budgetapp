import React from 'react';
import { View, TextInput, StyleSheet} from 'react-native';

const CustomInput = ({value, setValue, placeholder}) => {
    return (
        <View style={styles.container}>
            <TextInput
            value={value}
            onChangeText={setValue}
            placeholder={placeholder}
            style={styles.input}

            />
        </View>

    )
};

const styles= StyleSheet.create({
    container:{
        width: 350,
        height: 40,
        borderColor:'#e8e8e8',
        borderWidth:1,
        borderRadius: 24,
        paddingHorizontal:10,
        justifyContent:'center',
   

    }
});



export default CustomInput;