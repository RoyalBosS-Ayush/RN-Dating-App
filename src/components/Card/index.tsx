import { FlatList, StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import React from 'react'

const { height, width } = Dimensions.get("window");

const Card = ({ item }: { item: any }): JSX.Element => {
    console.log(item);
    return (
        <View style={styles.cardContainer}>
            <Text>{item.firstName} {item.lastName}</Text>
            <Image source={{ uri: item.image }} style={styles.image} resizeMode='cover' />
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        height,
        width,
        position: "relative",
    },
    image: {
        height,
        width,
        position: "absolute",
        top: 0,
        left: 0,
    },
})