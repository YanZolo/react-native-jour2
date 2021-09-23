import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tasks from './Components/Tasks';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.taskWrapper}>
        <Text style={styles.sectionTitle}>Today's tasks</Text>

        <View style={styles.items}>
          <Tasks text={'task1'}/>
          <Tasks text={'task2'}/>
          <Tasks text={'task3'}/>

        </View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
  },
  taskWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 900
  },
  items: {
    marginTop: 30
  },
});
