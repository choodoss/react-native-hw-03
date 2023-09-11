import { StyleSheet, Text, View, TextInput, Pressable, Image, Button } from 'react-native';
import CustomButton from './components/CustomButton';
import { useState } from 'react';
import AddIcon from '../img/svg/add.svg'

export default function RegistrationScreen() {
    const [login, onChangeLogin] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <View style={styles.container}>
            <View style={styles.ViewImage}>
                <Image style={styles.AvatarImage} source={require('../img/ava.jpg')} />
                <View style={styles.ButRemAddPhoto}>
                    <AddIcon width={25} height={25} />
                </View>
            </View>
            <Text style={styles.titleText}>Реєстрація</Text>
            <View style={styles.inputBody}>
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeLogin}
                    placeholder='Логін'
                    value={login}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangeEmail}
                    placeholder='Адреса електронної пошти'
                    value={email}
                />
                <TextInput
                    style={styles.input}
                    onChangeText={onChangePassword}
                    placeholder='Пароль'
                    value={password}
                />
            </View>
            <CustomButton text='Зареєстуватися' />
            <Pressable>
                {({ pressed }) => (
                    <Text style={[styles.link, { color: pressed ? '#FF6C00' : '#1B4371' }]}>Вже є акаунт? Увійти</Text>
                )}
            </Pressable >
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingTop: 92,
        paddingHorizontal: 16,
        paddingBottom: 34,
    },
    ViewImage: {
        position: 'absolute',
        top: '0',
        left: '50%',
        width: 120,
        height: 120,
        transform: [{ translateX: -44 }, { translateY: -60 }],
    },
    AvatarImage: {
        width: 120,
        height: 120,
        resizeMode: 'cover',
        borderRadius: 16,
    },
    ButRemAddPhoto: {
        position: 'absolute',
        right: 0,
        bottom: 16,
        width: 25,
        height: 25,
        transform: [{ translateX: 8 }],
    },
    addPhoto: {
        width: 25,
        height: 25,
        transform: [{ rotate: '45deg' }],
    },
    titleText: {
        color: '#212121',
        textAlign: 'center',
        fontFamily: 'RobotoMedium',
        fontSize: 30,
        letterSpacing: 0.3,
        marginBottom: 33,
    },
    input: {
        color: '#BDBDBD',
        padding: 16,
        width: '100%',
        height: 50,
        borderColor: '#E8E8E8',
        borderRadius: 10,
        backgroundColor: '#F6F6F6',
    },
    inputBody: {
        flexGrow: 1,
        flexDirection: 'column',
        gap: 16,
        marginBottom: 43,
    },
    link: {
        textAlign: 'center',
        marginTop: 16,
        marginBottom: 45,
    }
});