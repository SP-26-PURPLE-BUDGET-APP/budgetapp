import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TabView, TabBar } from 'react-native-tab-view';
import ExpensesScreen from './Tab/ExpensesScreen';
import IncomeScreen from './Tab/IncomeScreen';

const InsightScreen = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    { key: 'expenses', title: 'Expenses' },
    { key: 'income', title: 'Income' },
  ]);

  const renderScene = ({ route }) => {
    switch (route.key) {
      case 'expenses':
        return <ExpensesScreen />;
      case 'income':
        return <IncomeScreen />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBar
            {...props}
            indicatorStyle={{ backgroundColor: '#A385DB' }}
            style={{ backgroundColor: 'white' }}
            activeColor="#A385DB"
            inactiveColor="gray"
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default InsightScreen;
