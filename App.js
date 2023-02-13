import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import PrItem from './components/PrItem';
import { useState } from 'react';
import Header from './components/Header';

// palette https://mobilepalette.netlify.app/?color=151837

export default function App() {
  // dummy data
  const [pr, setPR] = useState([
    { exercise: 'Bench press', weight: 135, date: '2020-01-01' },
    { exercise: 'Squat', weight: 225, date: '2020-01-01' },
    { exercise: 'Deadlift', weight: 315, date: '2020-01-01' },
  ]);

  return (
    <>
      <Header style={{ marginTop: StatusBar.currentHeight }} />
      <View style={styles.container}>
        <Text style={styles.headerText}>Personal Records</Text>
        {pr.map((pr) => (
          <PrItem key={pr.exercise} pr={pr} />
        ))}

        <Text style={styles.headerText}>History</Text>
      </View>
      <StatusBar hidden={true} backgroundColor='#151837' />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F4FB',
    alignItems: 'center',
    //justifyContent: 'center',
  },

  headerText: {
    marginVertical: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#151837',
  },
});
