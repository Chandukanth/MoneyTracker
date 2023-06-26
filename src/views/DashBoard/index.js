import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Layout from '../../components/Layout';

const DashBoard = () => {
  return (
    <Layout
    title={"Dashboard"}
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
