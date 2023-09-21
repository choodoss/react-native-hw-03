import { StyleSheet, Text, View, Pressable, } from 'react-native';
import CustomButton from './components/CustomButton';
import { useState } from 'react';
import TitleText from './components/TitleText';
import Input from './components/Input';
import WightWrapper from './components/WightWrapper';

export default function LoginScreen() {
    const [email, onChangeEmail] = useState('');
    const [password, onChangePassword] = useState('');

    return (
        <WightWrapper>
            <TitleText text={'Увійти'} />
            <View style={styles.inputBody}>
                <Input type={'email'} onChangeInput={onChangeEmail} value={email} />
                <Input type={'pass'} onChangeInput={onChangePassword} value={password} />
            </View>
            <CustomButton text='Увійти' />
            <Pressable>
                {({ pressed }) => (
                    <Text style={[styles.link, { color: pressed ? '#FF6C00' : '#1B4371' }]}>Немає акаунту? <Text style={styles.linkWord}>Зареєструватися</Text></Text>
                )}
            </Pressable >
        </WightWrapper>
    );
};

const styles = StyleSheet.create({
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
    },
    linkWord: {
        textDecorationLine: 'underline',
    },
});