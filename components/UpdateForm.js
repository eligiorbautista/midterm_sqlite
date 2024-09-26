import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

const UpdateForm = () => {
  const [id, setId] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [mname, setMname] = useState("");
  const [course, setCourse] = useState("");
  const [year, setYear] = useState("");

  const handleSubmit = () => {};

  return (
    <View>
      <Text style={styles.title}>UPDATE STUDENT</Text>
      {/* ID */}
      <TextInput
        style={[styles.input, styles.input_id]}
        onChangeText={() => setId}
        value={id}
        placeholder="enter student id to update"
      />

      {/* First Name */}
      <TextInput
        style={styles.input}
        onChangeText={() => setFname}
        value={fname}
        placeholder="enter first name"
      />

      {/* Last Name */}
      <TextInput
        style={styles.input}
        onChangeText={() => setLname}
        value={lname}
        placeholder="enter last name"
      />

      {/* Middle Name */}
      <TextInput
        style={styles.input}
        onChangeText={() => setMname}
        value={mname}
        placeholder="enter middle name"
      />

      {/* Course */}
      <TextInput
        style={styles.input}
        onChangeText={() => setCourse}
        value={course}
        placeholder="enter course"
      />

      {/* Year */}
      <TextInput
        style={styles.input}
        onChangeText={() => setYear}
        value={year}
        placeholder=" enter year level"
      />

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
};

export default UpdateForm;
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
