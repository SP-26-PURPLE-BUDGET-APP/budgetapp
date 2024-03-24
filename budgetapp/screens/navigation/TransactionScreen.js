import React from 'react';
import { View, Text, StyleSheet, ScrollView} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import TransactionData from './TransactionData';
import BillTransaction from '../../Component/BillComponent';


const TransactionScreen = () => {
    const groupedTransactions = {}; // Initialize outside the loop

    // Group transactions by date
    TransactionData.forEach(transaction => {
        const { date, name, amount } = transaction;
        if (!groupedTransactions[date]) {
            groupedTransactions[date] = [];
        }
        groupedTransactions[date].push({ name, amount });
    });
   
    

    return (
        <View style={styles.container}>
            {/* History and Plus sign */}
            <View style={styles.history}>
                <Text style={{ marginLeft: 20, fontSize: 25, color: '#5F71D6' }}>History</Text>
                <FontAwesomeIcon icon={faPlus} style={{ marginRight: 20 }} size={25} color={'#5F71D6'} />
            </View>

            {/* Display transactions */}
            
            <ScrollView style={{flex:1}}>
            {Object.keys(groupedTransactions).map(date => (
                <View key={date} style={{marginBottom: 20}}>
                    <View style={{justifyContent:'center', alignItems:'center', marginTop:10, marginBottom: 10}}>
                    <Text style={{color:'rgba(112, 112, 112, 0.8)'}}>{date}</Text>
                    </View>
                    {groupedTransactions[date].map((transaction, index) => (
                        <View style={{alignItems:'center', justifyContent:'center', padding:10}}>
                        <Text key={index} >
                            <BillTransaction label={transaction.name} value={transaction.amount}/>
                        </Text>
                        </View>
                    ))}
                </View>
            ))}
            </ScrollView>

          

            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    history: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10,
    },
    transactionContainer: {
        marginBottom: 10,
    },
    date: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    transaction: {
        marginLeft: 20,
    },
});

export default TransactionScreen;
