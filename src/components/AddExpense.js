import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text } from 'react-native';
import { globalStyles, colors } from '../styles';

const AddExpense = ({ onSubmit }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  const handleAddExpense = () => {
    onSubmit({ title, amount: parseFloat(amount), date });
    setTitle('');
    setAmount('');
    setDate('');
  };

  return (
    <View style={globalStyles.container}>
      <TextInput
        style={globalStyles.input}
        placeholder="Title"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType="numeric"
      />
      <TextInput
        style={globalStyles.input}
        placeholder="Date"
        value={date}
        onChangeText={setDate}
      />
      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: colors.success }]}
        onPress={handleAddExpense}
      >
        <Text style={globalStyles.buttonText}>Add Expense</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddExpense;
