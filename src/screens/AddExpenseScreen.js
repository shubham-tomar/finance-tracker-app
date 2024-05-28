import React from 'react';
import { View, StyleSheet } from 'react-native';
import AddExpense from '../components/AddExpense';
import { getDBConnection, addExpense } from '../storage';

const AddExpenseScreen = ({ navigation }) => {
  const handleAddExpense = async (expense) => {
    const db = await getDBConnection();
    await addExpense(db, expense);
    navigation.goBack(); // Go back to HomeScreen after adding the expense
  };

  return (
    <View style={styles.container}>
      <AddExpense onSubmit={handleAddExpense} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default AddExpenseScreen;
