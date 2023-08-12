import * as AuthSession from 'expo-auth-session';
import { Text, View, StyleSheet, Image } from 'react-native';
                                                                                                             export default function AuthPage() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Local files and assets can be imported by dragging and dropping them into the editor
      </Text>
      <Image style={styles.logo} source={require('../assets/snack-icon.png')} />
    </View>
  );
}