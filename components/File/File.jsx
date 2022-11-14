import { StyleSheet, Text, View, Button, ScrollView, Image } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles/globals';
     
const FileCont = styled.View`
  display:flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
`

const PreviewBox = styled.View`
  height: 170px;
  width: 140px;
  background-color: ${colors.lightGrey};
  border-radius: 25px;
`

const BottomCont = styled.View`
  width: 140px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

export default function File() {
  return (

       <FileCont>
        <PreviewBox></PreviewBox>
        <BottomCont>
          <Text> Title </Text>
          <Image source={require('../../assets/ellipsis.png')}
          style = {{ width: 15, height: 15 }}
          />
        </BottomCont>
      </FileCont>
  )
}