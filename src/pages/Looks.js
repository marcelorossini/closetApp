import React, { useRef, useEffect, useState } from "react";
import { Button } from "react-native";
import { Form } from "@unform/mobile";
import Input from "../components/Input";
import AsyncStorage from '@react-native-async-storage/async-storage';

const Looks = () => {
    const [data, setData ] = useState('')
  const formRef = useRef(null);
  const handleSubmit = async data => {
    console.log(data);
    // { email: 'test@example.com', password: '123456' }
    await AsyncStorage.setItem('@MySuperStore:key', JSON.stringify(data));
  }

  useEffect(async () => {
    try {
        const value = await AsyncStorage.getItem('@MySuperStore:key');
        if (value == null) return
        setData(value)
    } catch (error) {

    }
  },[])


  return (
    <>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="email" type="email" />
        <Input name="password" type="password" />
        <Button title="Sign in" onPress={() => formRef.current.submitForm()} />
      </Form>
      {data}
    </>
  );
};

export default Looks;
