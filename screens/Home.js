import React from "react";
import styled from "styled-components/native";
import { Wrapper } from "../styles/globals";
import { TextInput, View, Image, Button, Text } from "react-native";

const Input = styled.TextInput`
  border: 2rem solid black;
  border-radius: 30rem;
  width: 85%;
  font-size: 18pt;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`;

const LinkText = styled.Text`
  color: #96adfc;
`;

export default function Home() {
  return (
    <Wrapper>
      <Image source={require("../assets/logo.png")}></Image>
      <Text>Reformat your study materials!</Text>
      <Input
        placeholder="Enter your email"
        keyboardType="email-address"
      ></Input>
      <Input placeholder="Enter your password" secureTextEntry="true"></Input>
      <Button title="Log In" onPress={() => {}}></Button>
      <Text>
        If you don't have an account, please{" "}
        <LinkText onPress={() => {}}>sign up!</LinkText>
      </Text>
    </Wrapper>
  );
}
