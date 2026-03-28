
import { Text, View, Button } from "react-native";
import React from "react";
import { styles } from "../styles";

const CompAScreen = ({ navigation, route }) => {
  const { itemId, otherParam } = route.params ?? {itemId: "No-ID", otherParam: "default value"};
  return (
    <View style={styles.container}>
      <Text style={styles.title}>CompA Screen</Text>
      <Text style={styles.subtitle}>Item ID: {itemId}</Text>
      <Text style={styles.subtitle}>Other Param: {otherParam}</Text>
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
      <View style={styles.buttonContainer}>
        <Button title="กลับหน้าหลัก " onPress={() => navigation.navigate("HomeTab")} />
      </View>
    </View>
  );
};

export default CompAScreen;