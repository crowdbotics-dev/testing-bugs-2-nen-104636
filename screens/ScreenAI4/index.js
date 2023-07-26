import { useNavigation } from "@react-navigation/native";
import { Pressable } from "react-native";
import React from 'react';
import { View, Text, Image, StyleSheet, SafeAreaView } from 'react-native';

const SplashScreen = () => {
  const navigation = useNavigation();
  return <SafeAreaView style={styles.container}>
      <View style={styles.logoContainer}>
        <Pressable onPress={() => {
        navigation.navigate("ScreenAI5");
      }}><Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.logo} /></Pressable>
        <Text style={styles.title}>Welcome to My App</Text>
      </View>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333'
  }
});
export default SplashScreen;