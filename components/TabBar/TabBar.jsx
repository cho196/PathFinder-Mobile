import styled from "styled-components/native";
import { StyleSheet, Text, Image } from "react-native";
import { Wrapper } from "../../styles/globals";
import { useState } from "react";
import { colors } from "../../styles/globals";

const TabBarCont = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px;
`;

const FolderNameCont = styled.View`
  border-bottom: black;
  width: 100px;
`;

const ButtonCont = styled.View`
  display: flex;
  align-items: center;
`;

const Line = styled.View`
  background-color: ${colors.lightGrey};
  width: 50px;
  height: 5px;
`;

export default function TabBar({}) {
  return (
    <Wrapper>
      <TabBarCont>
        <ButtonCont>
          <Text> Folder 1</Text>
          <Line />
        </ButtonCont>
        <ButtonCont>
          <Text> Folder 2</Text>
          <Line />
        </ButtonCont>
        <ButtonCont>
          <Image
            source={require("../../assets/plus.png")}
            style={{ width: 10, height: 10 }}
          />
          <Line />
        </ButtonCont>
      </TabBarCont>
    </Wrapper>
  );
}
