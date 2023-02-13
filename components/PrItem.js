import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import { useState } from 'react';
import CustomModal from './CustomModal';

const pritem = ({ pr }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        pr={pr}
      />

      <Pressable
        style={styles.itemCard}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.mainText}>{pr.exercise}</Text>
        <Text style={styles.subText}>
          <Text style={{ fontWeight: '500' }}>{pr.weight}</Text> kg.
        </Text>
        <Text
          style={{
            fontStyle: 'italic',
            fontSize: 14,
            color: '#F4F4FB',
          }}
        >
          {pr.date}
        </Text>
      </Pressable>
    </>
  );
};

export default pritem;

const styles = StyleSheet.create({
  itemCard: {
    backgroundColor: '#0A151A',
    width: '90%',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#F4F4FB',
  },

  subText: {
    position: 'absolute',
    right: 20,
    top: 20,

    fontSize: 18,
    fontStyle: 'italic',
    color: '#F4F4FB',
  },
});
