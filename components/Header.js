import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.menuText}>PR Tracker</Text>
      <Pressable
        style={styles.leftContainer}
        onPress={() => console.log('settings')}
      >
        <Ionicons name='settings-outline' size={24} color='#F4F4FB' />
      </Pressable>
      <Pressable
        onPress={() => console.log('add')}
        style={styles.rightContainer}
      >
        <Ionicons
          name='add-circle-outline'
          size={24}
          color='#F4F4FB'
        />
        <Text
          style={[styles.menuText, { fontSize: 18, marginLeft: 3 }]}
        >
          New
        </Text>
      </Pressable>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#151837',
    width: '100%',
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F4F4FB',
  },

  rightContainer: {
    position: 'absolute',
    backgroundColor: '#0A151A',
    borderRadius: 10,
    right: 12,
    padding: 6,
    flexDirection: 'row',
    alignItems: 'center',
  },

  leftContainer: {
    position: 'absolute',
    left: 12,
    padding: 5,
  },
});
