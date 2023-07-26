import { CheckBox, Button } from "react-native-elements";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled3 = () => {
  return <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1
    }}>
        <View style={styles.jxMvjZfv}></View>
        <CheckBox style={styles.ojJFRpKC} title="Checkbox Title"></CheckBox>
        <Button title="Continue" buttonStyle={styles.button} />
      </ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: "100%"
  },
  jxMvjZfv: {
    height: 60,
    width: 140,
    backgroundColor: "#e3e3e3",
    borderRadius: 0,
    color: "#777777"
  },
  ojJFRpKC: {
    width: 183,
    height: 69
  },
  button: {
    marginTop: 20,
    backgroundColor: "#007AFF"
  }
});
export default Untitled3;