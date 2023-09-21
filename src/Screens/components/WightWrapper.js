import { StyleSheet, View, } from 'react-native';

export default function WightWrapper({ children, type }) {
    return (
        <View style={[styles.container, { paddingTop: type === 'registration' ? 92 : 32 }]} >
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        backgroundColor: '#fff',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingHorizontal: 16,
        paddingBottom: 34,
    }
});