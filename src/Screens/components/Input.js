import { StyleSheet, TextInput } from 'react-native';

export default function Input({ type, onChangeInput, value, ishowPass = false }) {
    const typeINput = type === 'login' ? 'Логін' : type === 'email' ? 'Адреса електронної пошти' : 'Пароль';

    return (
        <TextInput
            style={styles.input}
            onChangeText={onChangeInput}
            placeholder={typeINput}
            value={value}
            autoComplete={type !== 'login' ? type : 'off'}
            secureTextEntry={type === 'password' && !ishowPass}
        />
    );
};

const styles = StyleSheet.create({
    input: {
        color: '#212121',
        padding: 16,
        width: '100%',
        height: 50,
        borderColor: '#E8E8E8',
        borderRadius: 10,
        backgroundColor: '#F6F6F6',
    }
});