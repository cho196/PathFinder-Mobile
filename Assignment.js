import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Container, Wrapper } from './styles/globals';
import File from './components/File/File';
import TopBar from './components/TopBar/TopBar';
import styled from 'styled-components/native';
import { colors } from './styles/globals';

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
`

export default function App() {
  return (
    <>
    <TopBar />
    <View>


      <Content>
      <Text> Title </Text>
      <Text>Open up App.js to start working on your app! dsfd sdf a dfs d ds fds sdfsdfa sdf sd fsd f dsf dasf sd f sdf d dsf sdf sd fasd fs dfasd fsd fsd sf dsf sfffd sdffffffffsdf sdfsdfd</Text>
      </Content>

      <StatusBar style="auto" />
    </View>
    </>
  );
}
