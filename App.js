import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrItem from './components/PrItem';
import { useState } from 'react';

export default function App() {
  // dummy data
  const [pr, setPR] = useState([
    { exercise: 'Bench press', weight: 135, date: '2020-01-01' },
    { exercise: 'Squat', weight: 225, date: '2020-01-01' },
    { exercise: 'Deadlift', weight: 315, date: '2020-01-01' },
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Personal Records</Text>
      {pr.map((pr) => (
        <PrItem key={pr.exercise} pr={pr} />
      ))}

      <Text style={styles.headerText}>Latest</Text>
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    top: 50,
    //justifyContent: 'center',
  },

  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
