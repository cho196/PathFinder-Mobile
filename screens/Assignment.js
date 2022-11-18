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

export default function Assignment({ navigation }) {
  return (
    <StyledView>
      <TopBar
        color={colors.primaryBlue}
        handleLeft={() => navigation.navigate("Library")}
      />
      <Content>
        <Text>Placeholder</Text>
        <Text>
          Open up App.js to start working on your app! dsfd sdf a dfs d ds fds
          sdfsdfa sdf sd fsd f dsf dasf sd f sdf d dsf sdf sd fasd fs dfasd fsd
          fsd sf dsf sfffd sdffffffffsdf sdfsdfd
        </Text>
      </Content>

      <StatusBar style="auto" />
    </StyledView>
  );
}
