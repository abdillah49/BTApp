import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'react-native-elements';
import { Text, StyleSheet, View } from 'react-native';

const ViewMenu = (props) => {
  
  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../assets/logo.png')}
        style={styles.img}
      />

      <View style={styles.box}>
        <View>
          <Text style={{ fontSize: 20, fontWeight: 'Bold' }}>
            {props.route.params.contacts.name}
          </Text>
        </View>
      </View>

      <View style={{ marginLeft: 10 }}>
        <Text style={{ fontWeight: 'Bold', marginBottom: 10 }}>
          {props.route.params.contacts.description}
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ViewMenu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    paddingTop: 0,
    paddingBottom: 0,
    backgroundColor: 'white',
  },

  img: {
    width: '100%',
    height: 300,
  },

  box: {
    width: '100%',
    padding: 10,
    marginTop: 10,
    marginLeft: 0,

    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
});