import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 50,
    height: 50,
    borderRadius:30,
    marginRight: 10,
  },
  content: {
    alignItems: 'flex-start',
    justifyContent: 'center',
    width: '70%',
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#3a3a3a',
  },
  author: {
    color: '#666',
    fontSize: 14,
    marginTop: 2,
  },
  description: {
    fontSize: 12,
    marginTop: 2,
    
  },
  separator: {
    backgroundColor: '#ececec',
    height: 1,
  },
  right: {
    alignItems: "flex-end",
    flex: 1
  }
});

export const MenuItem = ({ name, description, onPress }) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <View>
      <Image source={require('../assets/logo.png')} style={styles.image} />
    </View>
    <View style={styles.content}>
      <Text style={styles.name}>{description}</Text>
    </View>
    <View style={styles.right}>
      {/* <Icon name="chevron-forward-outline" color="#666" size={20} /> */}
    </View>
  </TouchableOpacity>
);

export const SeparatorList = () => <View style={styles.separator} />;