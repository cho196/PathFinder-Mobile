import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableHighlight,
} from "react-native";
import styled from "styled-components/native";
import { colors, textData } from "../../styles/globals";

const TopBarCont = styled.View`
  background-color: ${(props) => props.color}
  padding-top:15px;
  padding-bottom:15px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TopBarContent = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  width: 80%;
`;

const Header = styled.Text`
  size: ${textData.h1};
`;

export default function TopBar({
  color = "",
  text = "placeholder",
  handleLeft = () => {},
}) {
  return (
    <TopBarCont color={color}>
      <TopBarContent>
        <TouchableHighlight onPress={handleLeft}>
          <Image
            source={require("../../assets/arrowleft.png")}
            style={{ width: 20, height: 20 }}
          />
        </TouchableHighlight>
        <Header>{text}</Header>
        <TouchableHighlight onPress={() => {}}>
          <Image
            source={require("../../assets/ellipsis.png")}
            style={{ width: 25, height: 25 }}
          />
        </TouchableHighlight>
      </TopBarContent>
    </TopBarCont>
  );
}
