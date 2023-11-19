import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableHighlight } from 'react-native'
import FastImage from 'react-native-fast-image';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const { height, width } = Dimensions.get("window");

const Card = ({ item }: { item: any }): JSX.Element => {
    const [liked, setLiked] = useState(false);
    const [bookmarked, setBookmarked] = useState(false);
    const [superLiked, setSuperLiked] = useState(false);

    const handleLike = () => setLiked(prev => !prev);
    const handleBookmark = () => setBookmarked(prev => !prev);
    const handleSuperLike = () => setSuperLiked(prev => !prev);

    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardInnerContainer}>
                <FastImage source={{ uri: item.image }} style={styles.image} resizeMode='cover' />
            </View>
            <LinearGradient
                colors={["#fff0", "#fff0", "#fff0", "#ffff"]}
                start={{ x: 1, y: 0 }}
                end={{ x: 0, y: 1 }}
                style={[styles.cardInnerContainer, styles.gradientContainer]}
            >
                <View style={styles.textContainer}>
                    <Text numberOfLines={2} style={styles.bio}>{item.userAgent}</Text>
                    <View style={styles.row}>
                        <Text style={styles.fullName}>{item.firstName} {item.lastName}</Text>
                        <Text style={styles.age}>({item.age})</Text>
                        <MaterialIcons size={24} color={"#121212"} name={item.gender === "male" ? "male" : "female"} />
                    </View>
                </View>
                <View style={styles.btnContainer}>
                    <TouchableHighlight style={styles.touchableIconContainer} underlayColor={"#0003"} onPress={handleLike}>
                        <MaterialIcons size={24} color={liked ? "#fe0e1f" : "#fff"} name={liked ? "favorite" : "favorite-border"} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.touchableIconContainer} underlayColor={"#0003"} onPress={handleBookmark}>
                        <MaterialIcons size={24} color={bookmarked ? "#0eaffe" : "#fff"} name={bookmarked ? "bookmark" : "bookmark-border"} />
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.touchableIconContainer} underlayColor={"#0003"} onPress={handleSuperLike}>
                        <MaterialIcons size={24} color={superLiked ? "#affe0e" : "#fff"} name={"electric-bolt"} />
                    </TouchableHighlight>
                </View>
            </LinearGradient>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    cardContainer: {
        height,
        width,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f0f0ff",
        position: "relative",
    },
    cardInnerContainer: {
        height: height,
        width: width,
        borderRadius: 8,
        position: "absolute",
        top: 0,
        left: 0,
    },
    image: {
        height: height,
        width: width,
    },
    textContainer: {
        flex: 1,
    },
    fullName: {
        color: "#222",
        fontSize: 20,
    },
    age: {
        color: "#222",
        fontSize: 20,
        marginHorizontal: 4,
    },
    bio: {
        color: "#121212",
        fontSize: 14,
    },
    gradientContainer: {
        zIndex: 1,
        padding: 16,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-end",
    },
    btnContainer: {
        alignItems: "center",
    },
    touchableIconContainer: {
        height: 48,
        width: 48,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 12,
        borderRadius: 9999,
        backgroundColor: "#00000005",
    },
    row: {
        flexDirection: "row",
        alignItems: "center",
    }
})