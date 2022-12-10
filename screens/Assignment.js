import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { Container, Wrapper } from "../styles/globals";
import File from "../components/File/File";
import TopBar from "../components/TopBar/TopBar";
import styled from "styled-components/native";
import { colors } from "../styles/globals";
import { Route, Router } from "react-native";

const StyledView = styled.ScrollView`
  background-color: #fffef6;
  height: 100%;
`;
const Content = styled.View`
  border: 1rem solid ${colors.darkGrey};
  border-radius: 18px;
  margin: 25px;
  margin-top: 65px;
  padding: 10px;
  padding-top: 25px;
  padding-bottom: 25px;
`;

export default function Assignment({ navigation, route }) {
  const { fileContent, fileTitle, settingData } = route.params;
  return (
    <StyledView fileName="" fileData="">
      <TopBar
        color={colors.primaryBlue}
        handleLeft={() => navigation.navigate("Library")}
        text={fileTitle}
      />
      <Content>
        <Text>{fileTitle}</Text>
        <Text>{fileContent}</Text>
      </Content>

      <StatusBar style="auto" />
    </StyledView>
  );
}
