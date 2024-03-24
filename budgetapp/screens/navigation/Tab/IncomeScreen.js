

import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import TransactionData from '../TransactionData';
import { PieChart } from 'react-native-chart-kit';

const IncomeScreen = () => {
    const colors = [
        '#FFB6C1', // LightPink
        '#FFA07A', // LightSalmon
        '#FFD700', // Gold
        '#FF69B4', // HotPink
        '#9370DB', // MediumPurple
        '#40E0D0', // Turquoise
        '#87CEEB', // SkyBlue
        '#7FFFD4', // Aquamarine
        '#20B2AA', // LightSeaGreen
      ];
      

  // Filter transactions with negative numbers (spending)
  const filteredTransactions = TransactionData.filter(transaction => transaction.amount >0);

  // Calculate total spending
  const totalIncome = filteredTransactions.reduce((acc, cur) => acc + Math.abs(cur.amount), 0);

  // Calculate the percentage of spending for each category
  const categoryData = filteredTransactions.reduce((acc, cur) => {
    const category = cur.name;
    const amount = Math.abs(cur.amount);
    acc[category] = (acc[category] || 0) + amount;
    return acc;
  }, {});

  // Prepare data for the pie chart
  const pieChartData = Object.keys(categoryData).map((category, index) => ({
    name: category,
    amount: categoryData[category],
    percentage: ((categoryData[category] / totalIncome) * 100).toFixed(2),
    color: colors[index % colors.length], // Use modulo operator to cycle through colors
    legendFontColor: '#7F7F7F',
    legendFontSize: 15,
  }));

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20, color: '#5F71D6' }}>Total Income: ${totalIncome.toFixed(2)}</Text>
      <View style={styles.chart}>
      <PieChart
        data={pieChartData}
        width={350}
        height={350}
        chartConfig={{
          
          backgroundColor: '#ffffff',
          backgroundGradientFrom: '#ffffff',
          backgroundGradientTo: '#ffffff',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          
          
        }}
        accessor="amount"
        backgroundColor="transparent"
        paddingLeft='80'
        alignItems='center'
        absolute
        hasLegend={false}
      />
      </View>
      {/* Legend */}
      <View style={styles.legendContainer}>
        {pieChartData.map((data, index) => (
          <View key={index} style={styles.legendItem}>
            <View style={[styles.legendColorBox, { backgroundColor: data.color }]} />
            <Text style={styles.legendText}>{data.name} ({data.percentage}%)</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  legendContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    marginBottom: 10,
  },
  legendColorBox: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginRight: 5,
  },
  legendText: {
    fontSize: 12,
    color: '#7F7F7F',
  },
  chart:{
    width: 350,
    height: 350,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  }
});

export default IncomeScreen;
