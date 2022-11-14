import React from "react";
import styled from "styled-components/native";
import { TextInput, View, Image, Button } from "react-native";

const Input = styled(TextInput)`
  //   border: 1px solid black;
  //   border-radius: 15rem;
`;

export default function Home() {
  return (
    <View>
      <Input
        placeholder="Enter your email"
        keyboardType="email-address"
      ></Input>
      <Input placeholder="Enter your password" secureTextEntry="true"></Input>
    </View>
  );
}
