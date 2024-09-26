import { StatusBar } from "expo-status-bar";
import { Button, ScrollView, StyleSheet, Text, View } from "react-native";
import Table from "./components/Table";
import AddForm from "./components/AddForm";
import { useState } from "react";
import UpdateForm from "./components/UpdateForm";
import DeleteForm from "./components/DeleteForm";

export default function App() {
  const [isAdd, setIsAdd] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);
  const [isDelete, setIsDelete] = useState(false);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={[styles.buttonContainers]}>
          <Button
            title="Add"
            onPress={() => {
              setIsAdd((v) => !v);
            }}
          />
          <Button
            title="Update"
            onPress={() => {
              setIsUpdate((v) => !v);
            }}
          />
          <Button
            title="Delete"
            onPress={() => {
              setIsDelete((v) => !v);
            }}
          />
        </View>
        {/* RENDER FORMS */}

        {isAdd && <AddForm />}
        {isUpdate && <UpdateForm />}
        {isDelete && <DeleteForm />}
        <Table />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    marginTop: 20,
  },
});
