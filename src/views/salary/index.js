import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import Layout from '../../components/Layout';
import { useForm } from 'react-hook-form';
import TextInput from '../../components/TextInput';
import apiClient from '../../apiClient';
import { endpoints } from '../../helper/ApiEndPoint';
import AsyncStorageObject from '../../lib/AsyncStorage';
import AsyncStorage from '../../helper/AsyncStorage';
import { useNavigation } from '@react-navigation/native';

const SalaryForm = () => {

    const [detail, setDetail] = useState("")
    const navigation = useNavigation()


    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm({
    });

    useEffect(() => {
        getDetails();
    }, [])


    const Submit = async (values) => {
        const userId = await AsyncStorageObject.getItem(AsyncStorage.USER_ID)
        let data = { pgAmount: values.pg, rechargeAmount: values.recharge, salary: values.salary, userId: userId }
        apiClient.post(`${endpoints().salaryAPI}/create`, data, async (error, response) => {
            if (response && response.data) {
                navigation.navigate("Dashboard")
            }
        })
    };

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
            title={"Salary"}
        >
            <View style={{ width: '100%' }}>
                <TextInput
                    name={"salary"}
                    keyboardType="numeric"
                    placeholder={"Enter Salary"}
                    values={detail?.salary}
                    control={control}
                />

                <TextInput
                    name={"pg"}
                    keyboardType="numeric"
                    values={detail?.pagAmount}
                    placeholder={"Enter Pg Amount"}
                    control={control}
                />

                <TextInput
                    name={"recharge"}
                    keyboardType="numeric"
                    values={detail?.rechargeAmount}
                    placeholder={"Enter Recharge Amount"}
                    control={control}
                />

                <Button title="Submit" onPress={handleSubmit(Submit)} />
            </View>
        </Layout>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignContent: 'center'
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderColor: 'gray',
        marginBottom: 10,
        paddingHorizontal: 10,
    },
});

export default SalaryForm;
