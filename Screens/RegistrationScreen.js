import { StyleSheet, Text, View, TextInput, Pressable } from 'react-native';
import CustomButton from './components/CustomButton';
import { useState } from 'react';

export default function RegistrationScreen() {
    const [login, onChangeLogin] = useState('');
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <View style={styles.container}>
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