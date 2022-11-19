import styled from "styled-components/native";
import { StyleSheet, Text, Image, TouchableOpacity } from "react-native";
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

const StyledTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
`;

const Line = styled.View`
  background-color: ${((props) => props.sel && colors.secondaryBlue) ||
  colors.lightGrey};
  width: 100px;
  height: 5px;
`;

export default function TabBar({ tabArr = [] }) {
  const [sel, setSel] = useState(0);
  return (
    <Wrapper>
      <TabBarCont>
        {/* {tabArr.map((o, i) => (
          <StyledTouchableOpacity key={i} onPress={() => setSel(i)}>
            <Text>{o.text}</Text>
            <Line sel={sel} />
          </StyledTouchableOpacity>
        ))} */}
        <StyledTouchableOpacity onPress={() => {}}>
          <Text>placeholder</Text>
          <Line />
        </StyledTouchableOpacity>
      </TabBarCont>
    </Wrapper>
  );
}
