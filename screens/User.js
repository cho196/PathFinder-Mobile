import React, { useEffect } from "react";
import styled from "styled-components/native";
import { Wrapper } from "../styles/globals";
import { TextInput, View, Image, TouchableOpacity, Text } from "react-native";

const style = require("../styles/style");

const StyledWrapper = styled(Wrapper)`
  background-color: #fffef6;
`;

const Input = styled.TextInput`
  border: 2rem solid black;
  border-radius: 30rem;
  width: 80%;
  font-size: 18pt;
  padding-left: 10px;
  padding-top: 10px;
  padding-right: 10px;
  padding-bottom: 10px;
  background-color: #fffffc;
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

export default function User({ navigation }) {
  return (
    <StyledWrapper>
      <Image source={require("../assets/logo.png")}></Image>
      <Header>USER PAGE</Header>
    </StyledWrapper>
  );
}
