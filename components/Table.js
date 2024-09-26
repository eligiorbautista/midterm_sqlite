import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import * as SQLite from "expo-sqlite";

const Table = () => {
  const [students, setStudents] = useState([]);

  const db = SQLite.openDatabaseAsync("sims.db");

  useEffect(() => {
    const createDB = async () => {
      await db.execAsync(`CREATE TABLE IF NOT EXISTS sims (
            id INTEGER PRIMARY KEY NOT NULL, 
            fname TEXT NOT NULL, 
            lname TEXT NOT NULL, 
            mname TEXT NOT NULL, 
            course TEXT NOT NULL, 
            year TEXT NOT NULL);`);
    };

    const fetchData = async () => {
      const allRows = (await db).getAllAsync(
        "SELECT * FROM sims",
        [],
        (_, { rows: { _array } }) => {
          setStudents(_array);
        }
      );
    };

    createDB();
    fetchData();
  }, []);

  return (
    <View style={styles.table}>
      <View style={styles.row}>
        <Text style={[styles.cell, styles.header]}>ID</Text>
        <Text style={[styles.cell, styles.header]}>fname</Text>
        <Text style={[styles.cell, styles.header]}>lname</Text>
        <Text style={[styles.cell, styles.header]}>mname</Text>
        <Text style={[styles.cell, styles.header]}>course</Text>
        <Text style={[styles.cell, styles.header]}>year</Text>
      </View>
      {students.length > 0 ? (
        students.map((student) => (
          <View key={student.id} style={styles.row}>
            <Text style={styles.cell}>{student.id}</Text>
            <Text style={styles.cell}>{student.fname}</Text>
            <Text style={styles.cell}>{student.lname}</Text>
            <Text style={styles.cell}>{student.mname}</Text>
            <Text style={styles.cell}>{student.course}</Text>
            <Text style={styles.cell}>{student.year}</Text>
          </View>
        ))
      ) : (
        <Text style={styles.noData}>No data available</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  header: { fontWeight: "bold" },
  table: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    marginTop: 30,
    width: "100%",
    height: "auto",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    width: "auto",
    height: "auto",
    textAlign: "center",
    fontSize: 8,
    color: "black",
    borderColor: "black",
  },
  noData: {
    textAlign: "center",
    padding: 20,
    color: "gray",
  },
});

export default Table;
