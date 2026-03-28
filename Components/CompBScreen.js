import { Text, View, Button } from "react-native";
import React from "react";
import { styles } from "../styles";

const CompBScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CompB Screen</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="ไปหน้า A"
          onPress={() => navigation.navigate("Screen A")}
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="ไปหน้า C"
          onPress={() => navigation.navigate("Screen C")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="กลับหน้าหลัก " onPress={() => navigation.navigate("HomeTab")} />
      </View>
    </View>
  );
};

export default CompBScreen;