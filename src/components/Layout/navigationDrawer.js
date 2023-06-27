import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Modal from "../Modal/Modal";
import { Color } from "../../helper/Color";
import apiClient from "../../apiClient";
import { endpoints } from "../../helper/ApiEndPoint";
import AsyncStorageObject from "../../lib/AsyncStorage";
import AsyncStorage from "../../helper/AsyncStorage";

const ReportModal = ({ title, name, onPress, setAmount, amount, setDescription, description }) => {
  const [showPopup, setShowPopup] = useState(false);


  const openPopup = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  const modalHeader = (
    <Text style={styles.popupTitle}>Report Details - {title}</Text>
  )
  const modalFooter = (
    <View style={styles.modalFooter}>
      <View style={styles.divider} />
      <View style={{ flexDirection: "row", flex: 1 }}>

        <TouchableOpacity style={{ flex: 1, alignItems: 'center', backgroundColor: Color.PRIMARY, justifyContent: 'center', borderBottomLeftRadius: 5 }} onPress={() => {
          closePopup()
          onPress()

        }}>
          <Text style={styles.actionText}></Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ flex: 1, alignItems: 'center', backgroundColor: Color.SECONDARY, justifyContent: 'center', borderBottomRightRadius: 5 }}
          onPress={() => {
            closePopup();
          }}>
          <Text style={styles.actionText}></Text>
        </TouchableOpacity>

      </View>
    </View>
  )

  const modalBody = (
    <View style={styles.modalBody}>
      <TextInput
        style={styles.input}
        placeholder="Enter amount"
        value={amount}
        onChangeText={setAmount}
        keyboardType='numeric'
      />
      <TextInput
        style={styles.input}
        placeholder="Enter description"
        value={description}
        onChangeText={setDescription}
      />
    </View>
  )

  return (
    <>
      <TouchableOpacity onPress={openPopup}>
        <View style={styles.menuItem}>
          <Ionicons name={name} size={24} color="black" />
          <Text style={styles.menuItemText}>{title}</Text>
        </View>
      </TouchableOpacity>


      <Modal
        title={title}
        modalHeader={modalHeader}
        modalBody={modalBody}
        modalFooter={modalFooter}
        toggle={closePopup}
        modalVisible={showPopup}
        button1Label={"Update"}
        button1Press={() => {
          onPress()
          closePopup()
        }}
        button2Label={"Cancel"}
        button2Press={() => closePopup()}
      />
    </>
  );
};

const Menu = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleSave = async () => {
    const userId = await AsyncStorageObject.getItem(AsyncStorage.USER_ID)
    let data = {
      amount: amount,
      description: description,
      object_name: "DAILY",
      object_id: userId
    }
    apiClient.post(`${endpoints().reportAPI}/create`, data, async (error, response) => {

    })
  };
  const weeklySave = async () => {
    const userId = await AsyncStorageObject.getItem(AsyncStorage.USER_ID)
    let data = {
      amount: amount,
      description: description,
      object_name: "WEEKLY",
      object_id: userId
    }
    apiClient.post(`${endpoints().reportAPI}/create`, data, async (error, response) => {

    })
  };
  const monthlySave = async () => {
    const userId = await AsyncStorageObject.getItem(AsyncStorage.USER_ID)
    let data = {
      amount: amount,
      description: description,
      object_name: "MONTHLY",
      object_id: userId
    }
    apiClient.post(`${endpoints().reportAPI}/create`, data, async (error, response) => {

    })
  };

  return (
    <View style={styles.container}>
      <ReportModal setAmount={setAmount} amount={amount} setDescription={setDescription} description={description} onPress={handleSave} name={"md-checkbox-sharp"} title="Daily Report" />
      <ReportModal setAmount={setAmount} amount={amount} onPress={weeklySave} name="stats-chart-sharp" title="Weekly Report" />
      <ReportModal setAmount={setAmount} amount={amount} onPress={monthlySave} name={"sync-circle-outline"} title="Monthly Report" />
      <TouchableOpacity onPress={() => navigation.navigate("Login")}>
        <View style={styles.menuItem}>
          <Ionicons name="log-out" size={24} color="black" />
          <Text style={styles.menuItemText}>Logout</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 5,
  },
  menuItemText: {
    marginLeft: 12,
    fontSize: 16,
  },
  popupContainer: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 10,
    height: "50%",
    width: "100%",
  },
  popupTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
  },
  inputContainer: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  input: {
    height: 50,
    width: "100%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    borderRadius: 10
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
  },
  modalBody: {
    backgroundColor: "#fff",
    paddingVertical: 20,
    paddingHorizontal: 10
  },
});

export default Menu;
