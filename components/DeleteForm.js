import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { useState } from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseAsync("sims.db");

const DeleteForm = () => {
  const [id, setId] = useState("");

  const handleSubmit = () => {
    if (!id) {
      Alert.alert("Error", "Please enter a student ID");
      return;
    }

    db.transaction((tx) => {
      tx.executeSql(
        "DELETE FROM sims WHERE id = ?",
        [id],
        (_, result) => {
          if (result.rowsAffected > 0) {
            Alert.alert("Success", "Student deleted successfully");
          } else {
            Alert.alert("Error", "Student not found");
          }
          setId("");
        },
        (_, error) => {
          Alert.alert("Error", "Failed to delete student");
          console.log("Delete error:", error);
        }
      );
    });
  };

  return (
    <View>
      <Text style={styles.title}>DELETE STUDENT</Text>

      {/* ID */}
      <TextInput
        style={[styles.input, styles.input_id]}
        onChangeText={setId}
        value={id}
        placeholder="Enter student ID to delete"
        keyboardType="numeric"
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default DeleteForm;

const styles = StyleSheet.create({
  input_id: {
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
  },
});
