import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import File from "../components/File/File";
import TopBar from "../components/TopBar/TopBar";
import styled from "styled-components/native";
import { colors } from "../styles/globals";
import TabBar from "../components/TabBar/TabBar";

const Content = styled.View`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1rem solid ${colors.darkGrey};
  border-radius: 18px;
  margin: 25px;
  margin-top: 65px;
  padding: 10px;
  padding-top: 50px;
  padding-bottom: 50px;
`;

const FileSectionCont = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <ScrollView>
      <TopBar />
      <View>
        <TabBar />

        <FileSectionCont>
          <File></File>
          <File></File>
          <File></File>
          <File></File>
          <File></File>
          <File></File>
          <File></File>
          <File></File>
          <File></File>
          <File></File>
        </FileSectionCont>

        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}
