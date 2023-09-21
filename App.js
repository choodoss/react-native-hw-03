import { StyleSheet, View, ImageBackground, Text } from 'react-native';
import { useFonts } from 'expo-font';
import RegistrationScreen from './src/Screens/RegistrationScreen';
import LoginScreen from './src/Screens/LoginScreen';
import PostsScreen from './src/Screens/PostsScreen';

export default function App() {
  const [fontsLoaded] = useFonts({
    'RobotoMedium': require('./src/assets/fonts/Roboto-Medium.ttf'),
    'RobotoRegular': require('./src/assets/fonts/Roboto-Regular.ttf'),
    'InterMedium': require('./src/assets/fonts/Inter-Medium.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>

      <ImageBackground source={require('./src/img/PhotoBG.jpg')} resizeMode="cover" style={styles.image}>
        <RegistrationScreen />
        {/* <LoginScreen /> */}
        {/* <PostsScreen /> */}
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    fontFamily: 'RobotoRegular',
    fontSize: 16,
  },
  image: {
    height: '100%',
    width: '100%',
    justifyContent: 'flex-end',
  },
});