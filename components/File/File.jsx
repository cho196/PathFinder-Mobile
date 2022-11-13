import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../styles/globals';
     
const FileCont = styled.View`
  display:flex;
  justify-content: center;
  align-items: center;
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

const FileSectionCont = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

export default function File() {
  return (

       <FileCont>
        <PreviewBox></PreviewBox>
        <BottomCont>
          <Text> Title </Text>
          <Text> ... </Text>
        </BottomCont>
      </FileCont>
  )
}