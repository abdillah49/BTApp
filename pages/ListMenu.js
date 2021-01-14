import React, {useState, useEffect} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Text, Button} from 'react-native-elements';
import firestore from '@react-native-firebase/firestore';


import { MenuItem, SeparatorList } from '../components/MenuItem';

const ListMenu = ({navigation}) => {
  const [data, setData] = useState();

    useEffect(() => {
    firestore()
      .collection('menu')
      .onSnapshot((snapshot) => {
        const dataMenu = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(dataMenu);
      });
  }, []);

  let deleteData = firestore().collection('menu');

  const deleteBook = (key) => {
    deleteData
      .doc(key)
      .delete()
      .then(() => {
        alert('F&B Menu successfully deleted');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  console.log(data);
  return (
    <SafeAreaView style={styles.container}>
      
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <MenuItem
              title={item.title}
              author={item.author}
              description={item.description}
              onPress={() => navigation.navigate('ViewMenu', { contacts: item })
            }
          />
          );
        }}
        ItemSeparatorComponent={SeparatorList}
        ListHeaderComponent={() => <SeparatorList />}
        ListFooterComponent={() => <SeparatorList />}
      />
      <Button
        title="Add Menu"
        onPress={() => navigation.navigate('InputMenu')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'space-between',
  },
  product: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  action: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  wrapper: {
    borderWidth: 1,
    borderColor: '#2e2e2e',
    padding: 20,
  },
  title: {
    fontSize:16,
    fontWeight:"bold",
  },
  author: {
    fontSize:15,
    fontStyle:"italic",
    fontSize:13,
  },
});

export default ListMenu;