import React, { useState, useCallback } from 'react';
import { View, FlatList, Text, TouchableOpacity } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { getDBConnection, getExpenses, createTables } from '../storage';
import { globalStyles, colors } from '../styles';

const HomeScreen = ({ navigation }) => {
  const [expenses, setExpenses] = useState([]);

  const loadData = async () => {
    const db = await getDBConnection();
    await createTables(db);
    const storedExpenses = await getExpenses(db);
    setExpenses(storedExpenses);
  };

  useFocusEffect(
    useCallback(() => {
      loadData();
    }, [])
  );

  return (
    <View style={globalStyles.container}>
      <FlatList
        data={expenses}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={[globalStyles.input, { backgroundColor: colors.white }]}>
            <Text style={globalStyles.title}>{item.title}</Text>
            <Text style={{ color: colors.success }}>${item.amount.toFixed(2)}</Text>
            <Text style={{ color: colors.gray }}>{item.date}</Text>
          </View>
        )}
      />
      <TouchableOpacity
        style={[globalStyles.button, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate('AddExpense')}
      >
        <Text style={globalStyles.buttonText}>Add Expense</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
