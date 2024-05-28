import React, { useState, useCallback } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import ExpenseList from '../components/ExpenseList';
import { getDBConnection, getExpenses, createTables } from '../storage';

const HomeScreen = ({ navigation }) => {
  const [expenses, setExpenses] = useState([]);

  const loadData = async () => {
    const db = await getDBConnection();
    await createTables(db);
    const storedExpenses = await getExpenses(db);
    setExpenses(storedExpenses);
  };

  // Load data when the component mounts
  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <View style={styles.container}>
      <ExpenseList expenses={expenses} />
      <Button
        title="Add Expense"
        onPress={() => navigation.navigate('AddExpense')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default HomeScreen;
