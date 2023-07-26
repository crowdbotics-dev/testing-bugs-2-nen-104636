import React, { useState } from "react";
import { SafeAreaView, View, TextInput, Text, Button, Picker, DatePickerAndroid, TimePickerAndroid } from "react-native";

const NotificationScreen = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [selectedGroup, setSelectedGroup] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSendNotification = () => {// Logic for sending the notification
  };

  const showDatePicker = async () => {
    try {
      const {
        action,
        year,
        month,
        day
      } = await DatePickerAndroid.open({
        date: new Date()
      });

      if (action !== DatePickerAndroid.dismissedAction) {
        setDate(`${day}-${month + 1}-${year}`);
      }
    } catch ({
      code,
      message
    }) {
      console.warn("Cannot open date picker", message);
    }
  };

  const showTimePicker = async () => {
    try {
      const {
        action,
        hour,
        minute
      } = await TimePickerAndroid.open({
        hour: new Date().getHours(),
        minute: new Date().getMinutes(),
        is24Hour: false
      });

      if (action !== TimePickerAndroid.dismissedAction) {
        setTime(`${hour}:${minute}`);
      }
    } catch ({
      code,
      message
    }) {
      console.warn("Cannot open time picker", message);
    }
  };

  return <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.backIcon}>{'<'}</Text>
        <Text style={styles.headerText}>Notification Screen</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Notification Title" value={title} onChangeText={setTitle} />
        <TextInput style={styles.input} placeholder="Notification Content" value={content} onChangeText={setContent} multiline />
        <Picker style={styles.picker} selectedValue={selectedGroup} onValueChange={itemValue => setSelectedGroup(itemValue)}>
          <Picker.Item label="Select Group" value="" />
          <Picker.Item label="Group 1" value="group1" />
          <Picker.Item label="Group 2" value="group2" />
          <Picker.Item label="Group 3" value="group3" />
        </Picker>
        <Button title="Choose Date" onPress={showDatePicker} />
        <Text>{date}</Text>
        <Button title="Choose Time" onPress={showTimePicker} />
        <Text>{time}</Text>
        <Button title="Send" onPress={handleSendNotification} />
      </View>
    </SafeAreaView>;
};

const styles = {
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5"
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20
  },
  backIcon: {
    fontSize: 20,
    marginRight: 10
  },
  headerText: {
    fontSize: 18,
    fontWeight: "bold"
  },
  inputContainer: {
    width: "80%",
    padding: 20,
    backgroundColor: "white",
    borderRadius: 10
  },
  input: {
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5
  },
  picker: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5
  }
};
export default NotificationScreen;