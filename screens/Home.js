import React from "react";
import styled from "styled-components/native";
import { Wrapper } from "../styles/globals";
import { TextInput, View, Image, TouchableOpacity, Text } from "react-native";

const Input = styled.TextInput`
  border: 2rem solid black;
  border-radius: 30rem;
  width: 80%;
  font-size: 18pt;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
`;

const Header = styled.Text`
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 18pt;
`;

const NewButton = styled.TouchableOpacity`
  background-color: #c3d1ff;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 80%;
  border-radius: 30rem;
`;

const ButtonText = styled.Text`
  text-align: center;
  font-size: 18pt;
`;

export default function Home({ navigation }) {
  return (
    <Wrapper>
      <Image source={require("../assets/logo.png")}></Image>
      <Header>Reformat your study materials!</Header>
      <Input
        placeholder="Enter your email"
        keyboardType="email-address"
      ></Input>
      <Input placeholder="Enter your password" secureTextEntry="true"></Input>
      <NewButton onPress={() => navigation.navigate("Page")}>
        <ButtonText>Log In</ButtonText>
      </NewButton>
    </Wrapper>
  );
}
