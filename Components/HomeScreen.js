import { Text, View, Button } from "react-native";
import React from "react";
import { styles } from "../styles"; // ดึงตัวแปรชื่อ styles จากไฟล์ App.js ที่อยู่ “โฟลเดอร์ระดับบน”

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HomeScreen</Text>

      <View style={styles.buttonContainer}>
        <Button
          title="ไปหน้า A"
          onPress={() => navigation.navigate("Screen A", { itemId: 423, otherParam: "anything you want here" })}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="ไปหน้า B"
          onPress={() => navigation.navigate("Screen B")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="ไปหน้า C"
          onPress={() => navigation.navigate("Screen C")}
        />
      </View>
    </View>
  );
};

export default HomeScreen;