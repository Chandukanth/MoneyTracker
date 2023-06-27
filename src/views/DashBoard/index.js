import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from '../../components/Layout';
import apiClient from '../../apiClient';
import { endpoints } from '../../helper/ApiEndPoint';
import AsyncStorageObject from '../../lib/AsyncStorage';
import AsyncStorage from '../../helper/AsyncStorage';

const DashBoard = () => {
  const [detail, setDetail] = useState("")

  useEffect(() => {
    getDetails();
  }, [])

  const getDetails = async () => {
    const userId = await AsyncStorageObject.getItem(AsyncStorage.USER_ID)
    apiClient.get(`${endpoints().salaryAPI}/${userId}`, async (error, response) => {
      if (response && response.data) {
        setDetail(response.data)
      }
    })
  }
  return (
    <Layout
      title={"Dashboard"}
      sidebarOpen={true}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Welcome to MoneyTracker!</Text>
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default DashBoard;
