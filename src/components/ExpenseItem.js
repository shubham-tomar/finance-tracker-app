import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExpenseItem = ({ expense }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{expense.title}</Text>
      <Text style={styles.amount}>${expense.amount}</Text>
      <Text style={styles.date}>{expense.date}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginVertical: 5,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  amount: {
    fontSize: 14,
    color: 'green',
  },
  date: {
    fontSize: 12,
    color: 'gray',
  },
});

export default ExpenseItem;
