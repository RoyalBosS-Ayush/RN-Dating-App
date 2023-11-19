import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import Card from '../components/Card'
import Swiper from 'react-native-deck-swiper';

const Home = (): JSX.Element => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/users").then(resp => resp.json()).then(res => {
      const users = res.users || [];
      setUsers(users);
    })
  }, []);

  if (users.length == 0)
    return <></>;
  return (
    <View>
      <Swiper
        cards={users}
        renderCard={(item) => <Card item={item} />}
        onSwiped={(cardIndex: any) => null}
        onSwipedAll={() => null}
        cardIndex={0}
        stackSize={3}
        verticalSwipe={false}
        cardHorizontalMargin={0}
        cardVerticalMargin={0}
      />
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})