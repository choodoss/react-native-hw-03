import { StyleSheet, Text } from 'react-native';

export default function TitleText({ text }) {
    return (
        <Text style={styles.titleText}>{text}</Text>
    );
};

const styles = StyleSheet.create({
    titleText: {
        color: '#212121',
        textAlign: 'center',
        fontFamily: 'RobotoMedium',
        fontSize: 30,
        letterSpacing: 0.3,
        marginBottom: 33,
    }
});