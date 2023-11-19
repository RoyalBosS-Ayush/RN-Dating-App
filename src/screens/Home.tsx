import { FlatList, StyleSheet, Text, View, Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import Card from '../components/Card'

const getItemLayout = (_: any, index: number) => ({
  length: Dimensions.get('window').height,
  offset: Dimensions.get('window').height * index,
  index,
});

const keyExtractor = (item: any) => item.id;

const Home = (): JSX.Element => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users").then(resp => resp.json()).then(res => {
      const users = res.users || [];
      setUsers(users);
    })
  }, []);

  return (
    <View>
      <FlatList
        data={users}
        renderItem={Card}
        keyExtractor={keyExtractor}
        getItemLayout={getItemLayout}
        initialNumToRender={2}
        maxToRenderPerBatch={2}
        windowSize={2}
        removeClippedSubviews={true}
        pagingEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})