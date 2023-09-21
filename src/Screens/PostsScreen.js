import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import LogOut from '../img/svg/log-out.svg';

export default function PostsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.titleView}>
                <Text style={styles.titleText}>Публікації</Text>
                <View style={styles.logOutContainer}>
                    <LogOut style={styles.logOut} />
                </View>
            </View>
            <View style={styles.content}>
                <View style={styles.userDetails}>
                    <Image style={styles.userImage} source={require('../img/ava.jpg')} />
                    <View style={styles.userDesc}>
                        <Text style={styles.userName}>Natali Romanova</Text>
                        <Text style={styles.userEmail}>email@example.com</Text>
                    </View>
                </View>
            </View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 40,
        backgroundColor: '#fff',
        paddingBottom: 25,
    },
    titleView: {
        position: 'relative',
        flexDirection: 'row',
        paddingBottom: 11,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 11,
        borderBottomColor: 'rgba(0, 0, 0, 0.30)',
        borderStyle: 'solid',
        borderBottomWidth: 1,
    },
    titleText: {
        color: '#212121',
        textAlign: 'center',
        fontSize: 17,
        fontStyle: 'normal',
        fontWeight: '500',
        lineHeight: 22,
        letterSpacing: -0.408,
    },
    logOutContainer: {
        position: 'absolute',
        right: 10,
    },
    logOut: {
        width: 100,
        height: 100,
        stroke: '#BDBDBD',
        color: '#BDBDBD',
    },
    content: {
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 32,
    },
    userDetails: {
        flexDirection: 'row',
        gap: 8,
        alignItems: 'center',

    },
    userImage: {
        borderRadius: 16,
        width: 60,
        height: 60,
    },
    userDesc: {},
    userName: {},
    userEmail: {},
});
