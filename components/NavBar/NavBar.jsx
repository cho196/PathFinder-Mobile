import { StyleSheet, Text, View, Button, Image } from "react-native";
import styled from "styled-components/native";
import { colors, textData } from "../../styles/globals";

const NavBarCont = styled.View`
  background-color: ${colors.secondaryBlue};
  height: 12%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavBarContent = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  margin-top: 10%;
  width: 80%;
`;

const Header = styled.Text`
  size: ${textData.h1};
`;

export default function NavBar({}) {
  return (
    <NavBarCont>
      <NavBarContent>
        <Image
          source={require("../../assets/arrowleft.png")}
          style={{ width: 20, height: 20 }}
        />
        <Header> Assignment 1 </Header>
        <Image
          source={require("../../assets/ellipsis.png")}
          style={{ width: 25, height: 25 }}
        />
      </NavBarContent>
    </NavBarCont>
  );
}
