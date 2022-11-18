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

const StyledView = styled.ScrollView`
  background-color: #fffef6;
  height: 100%;
`;

export default function Library({ navigation, fileArr = [] }) {
  return (
    <StyledView>
      <TopBar
        text="Library"
        color="transparent"
        handleLeft={() => navigation.navigate("Home")}
      />
      <View>
        <TabBar />

        <FileSectionCont>
          {fileArr.map((o, i) => (
            <File
              key={i}
              text={o.text}
              handlePress={() => navigation.navigate("Assignment")}
            ></File>
          ))}
          <File handlePress={() => navigation.navigate("Assignment")} />
        </FileSectionCont>

        <StatusBar style="auto" />
      </View>
    </StyledView>
  );
}
