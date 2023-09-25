import { StyleSheet, Text, View, Pressable, Image, KeyboardAvoidingView, Platform, TouchableHighlight } from 'react-native';
import CustomButton from './components/CustomButton';
import { useState } from 'react';
import AddIcon from '../img/svg/add.svg'
import TitleText from './components/TitleText';
import Input from './components/Input';
import WightWrapper from './components/WightWrapper';

export default function RegistrationScreen() {
    const [login, setChangeLogin] = useState('');
    const [email, setChangeEmail] = useState('');
    const [password, setChangePassword] = useState('');
    const [ishowPass, setIsShowPass] = useState(false);

    const getData = () => {
        console.log(login)
        console.log(email)
        console.log(password)
    }

    return (

        <WightWrapper style={styles.wightWrapper} type={'registration'}>
            <View style={styles.ViewImage}>
                <Image style={styles.AvatarImage} source={require('../img/ava.jpg')} />
                <TouchableHighlight onClick={() => console.log('click')} style={styles.ButRemAddPhoto}>
                    <AddIcon style={styles.addPhoto} />
                </TouchableHighlight>
            </View>
            <TitleText text={'Реєстрація'} />
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} >
                <View style={styles.inputBody}>
                    <Input type={'login'} onChangeInput={setChangeLogin} value={login} />
                    <Input type={'email'} onChangeInput={setChangeEmail} value={email} />
                    <View style={styles.paswordWiew}>
                        <Input type={'password'} ishowPass={ishowPass} onChangeInput={setChangePassword} value={password} />
                        <Pressable onPress={() => setIsShowPass(!ishowPass)} style={styles.passWiewButton}>
                            {({ pressed }) =>
                                (<Text style={[styles.passWiewButtonText, { color: pressed ? '#FF6C00' : '#1B4371' }]}>{ishowPass ? 'Сховати' : 'Показати'}</Text>)
                            }
                        </Pressable >
                    </View>
                </View>
            </KeyboardAvoidingView>
            <CustomButton onGetData={getData} text='Зареєстуватися' />
            <Pressable>
                {({ pressed }) => (
                    <Text style={[styles.link, { color: pressed ? '#FF6C00' : '#1B4371' }]}>Вже є акаунт? Увійти</Text>
                )}
            </Pressable >
        </WightWrapper>
    );
};

const styles = StyleSheet.create({
    wightWrapper: {
        paddingTop: 92,
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
        fill: '#FF6C00',
        stroke: '#FF6C00',
        width: 25,
        height: 25,
        transform: [{ rotate: '45deg' }],
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
    },
    passWiewButton: {
        color: '#1B4371',
    },
    passWiewButtonText: {
        position: 'absolute',
        top: 16,
        right: 16,
    },
    paswordWiew: {
        position: 'relative',
        flexDirection: 'row',
    },
});

