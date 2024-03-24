import React, {useRef} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {LineChart} from 'react-native-chart-kit';



const incomeData=[1000, 800, 300, 400];
const expensesData=[1200, 200, 100, 160 ];

const totalIncome=incomeData.reduce((acc, val)=> acc+val, 0);
const totalExpenses=expensesData.reduce((acc,val)=> acc+val,0);


const data={
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets:[
        {
            data: incomeData,
            color: (opacity =1) => `rgba(0, 255, 0, ${opacity})`, //Green color

        },
        {
            data:expensesData,
            color: (opacity=1)=> `rgba(255, 0, 0, ${opacity})`, //Red color
        }

    ],
};

const chartConfig = {
    backgroundGradientFrom: '#fff',
    backgroundGradientTo: '#fff',
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2,
    barPercentage: 0.5,
  };


const DashboardScreen = ()=>{
    const chartRef = useRef();
    return(
        <View style={styles.container}>
            
            
            {/*The graph between the earned income and expenses*/}
            <View style={styles.chartContainer}>
                <LineChart
                    ref={chartRef}
                    data={data}
                    width={400}
                    height={250}
                    chartConfig={chartConfig}
                    bezier
                />
                {/*The note underneath the graph*/}
                <View style={styles.noteContainer}>
                    {/*TTotal Income*/}
                    <View style={styles.income}>
                        <Text style={{fontSize:18, marginLeft:1, color:'#707070'}}>Income</Text>
                        <Text style={{top:10, color:'#2BAF45', fontSize:20, marginTop:-5}}>${totalIncome}</Text>
                    </View>

                    {/*Total Expenses*/}
                    <View>
                        <Text style={{fontSize:18,color:'#707070'}}>Expenses</Text>
                        <Text style={{top:10, color:'#E3172F', fontSize:20, marginTop:-5}}>${totalExpenses}</Text>
                    </View>
                </View>

            </View>


            {/*The total balance*/}
            <View style={styles.box}> 
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceLabel}>Total: </Text>
                    <Text style={styles.balanceAmount}>$5,000</Text>
                </View>

                <View style={styles.cashContainer}>
                    <Text style={styles.cashLabel}>Cash: </Text>
                    <Text style={styles.cashAmount}>$1,000</Text>
                </View>

                <View style={styles.bankContainer}>
                    <Text style={styles.bankLabel}>Bank Account: </Text>
                    <Text style={styles.bankAmount}>$4,000</Text>
                </View>
            </View>
        </View>
    )
};
const styles= StyleSheet.create({
    container:{
        alignItem:'center',
        top:20,
        backgroundColor:'#F5F5F5'
        
     
    },
    chartContainer:{
        borderRadius: 10, // border radius for rounded corners
        shadowColor: '#000', // shadow color
        shadowOffset: { width: 0, height: 2 }, // shadow offset
        shadowOpacity: 0.25, // shadow opacity
        shadowRadius: 3.84, // shadow radius
        elevation: 5, // elevation for Android shadow
        backgroundColor: '#fff', // background color of the box
        padding: 10, // padding inside the box
        marginLeft:10,
        marginRight:20,
        overflow:'hidden',
        height:350, 
        justifyContent:'center'
        
    },
    noteContainer:{
        flexDirection:'row',
        justifyContent:'space-around',
        
     
    },

    box:{
        top: 30,
        borderRadius: 10, 
        shadowColor: '#000', 
        shadowOffset: { width: 0, height: 2 }, // shadow offset
        shadowOpacity: 0.25, // shadow opacity
        shadowRadius: 3.84, // shadow radius
        elevation: 5, // elevation for Android shadow
        backgroundColor: '#fff', // background color of the box
        padding: 10, // padding inside the box
        marginLeft:10,
        marginRight:20,
        overflow:'hidden',
        height: 200,
        justifyContent:'center'
        
    },
    balanceContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    balanceLabel:{
        marginLeft:20,
        fontSize: 30,
        color: '#5F71D6'
    },
    balanceAmount:{
        marginRight:20,
        fontSize: 30,
        color: '#5F71D6'
    },

    cashContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:60
    },
    cashLabel:{
        marginLeft:20,
        fontSize: 20,
        color: '#707070'
    },
    cashAmount:{
        marginRight:20,
        fontSize: 20,
        color: '#707070'
    },
    bankContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:5
    },
    bankLabel:{
        marginLeft:20,
        fontSize: 20,
        color: '#707070'
    },
    bankAmount:{
        marginRight:20,
        fontSize: 20,
        color: '#707070'
    }
});

export default DashboardScreen;