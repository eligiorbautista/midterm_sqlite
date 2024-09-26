import { View, Text, TextInput, StyleSheet, Button, Alert } from "react-native";
import React, { useState } from "react";
import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabaseAsync("sims.db");

const AddForm = () => {
  const [id, setId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mname, setMname] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = async () => {
    if (!id || !fname || !lname || !mname || !course || !year) {
      Alert.alert("Error", "Please fill out all fields");
      return;
    }

    const InsertData = async () => {
      await (
        await db
      ).runAsync(
        "INSERT INTO sims (id, fname, lname, mname, course, year) VALUES (?, ?, ?, ?, ?, ?)",
        [id, fname, lname, mname, course, year],
        (_, result) => {
          Alert.alert("Success", "Student added successfully");
          setId("");
          setFname("");
          setLname("");
          setMname("");
          setCourse("");
          setYear("");
        },
        (_, error) => {
          Alert.alert("Error", "Failed to add student");
          console.log("Insert error:", error);
        }
      );

      InsertData();
    };
  };

  return (
    <View>
      <Text style={styles.title}>ADD STUDENT</Text>

      {/* ID */}
      <TextInput
        style={styles.input}
        onChangeText={setId}
        value={id}
        placeholder="Enter student ID"
        keyboardType="numeric"
      />

      {/* First Name */}
      <TextInput
        style={styles.input}
        onChangeText={setFname}
        value={fname}
        placeholder="Enter first name"
      />

      {/* Last Name */}
      <TextInput
        style={styles.input}
        onChangeText={setLname}
        value={lname}
        placeholder="Enter last name"
      />

      {/* Middle Name */}
      <TextInput
        style={styles.input}
        onChangeText={setMname}
        value={mname}
        placeholder="Enter middle name"
      />

      {/* Course */}
      <TextInput
        style={styles.input}
        onChangeText={setCourse}
        value={course}
        placeholder="Enter course"
      />

      {/* Year */}
      <TextInput
        style={styles.input}
        onChangeText={setYear}
        value={year}
        placeholder="Enter year level"
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 10,
  },
  input: {
    height: 40,
    margin: 5,
    borderWidth: 1,
    padding: 10,
  },
});

export default AddForm;
