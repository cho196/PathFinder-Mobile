import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  Image,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import { colors } from "../../styles/globals";
import { useEffect } from "react";

const FileCont = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
  width: 100%;
  padding-left: 25px;
  padding-right: 25px;
`;

const PreviewBox = styled.View`
  height: 170px;
  width: 140px;
  background-color: ${colors.lightGrey};
  border-radius: 25px;
`;

const BottomCont = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 10px;
`;

export default function File({
  handlePress = () => {},
  fileName = "placeholder",
  fileId = null,
}) {
  return (
    <FileCont>
      <TouchableOpacity onPress={handlePress(fileId)}></TouchableOpacity>
      <BottomCont>
        <Text>{fileName}</Text>
        <Image
          source={require("../../assets/ellipsis.png")}
          style={{ width: 15, height: 15 }}
        />
      </BottomCont>
    </FileCont>
  );
}
