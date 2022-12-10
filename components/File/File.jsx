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

const FileCont = styled.TouchableOpacity`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 10px;
  width: 100%;
  padding: 25px;
  background-color: ${colors.backgroundYellow};
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
    <FileCont onPress={() => handlePress(fileId)}>
      <Text>{fileName}</Text>
    </FileCont>
  );
}
