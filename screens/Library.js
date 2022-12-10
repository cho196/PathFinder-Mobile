import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import File from "../components/File/File";
import TopBar from "../components/TopBar/TopBar";
import styled from "styled-components/native";
import { colors } from "../styles/globals";
import TabBar from "../components/TabBar/TabBar";
import axios from "axios";
import { useEffect, useState } from "react";
import * as mainHandler from "../handlers/main";

const FileSectionCont = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledView = styled.ScrollView`
  background-color: #fffef6;
  height: 100%;
`;

export default function Library({ navigation, fileArr = [] }) {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://adonis-production-78c7.up.railway.app/api/db/files/userid/9"
      )
      .then((res) => {
        setFiles(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleGetFile(fileId, cb) {
    try {
      return axios({
        method: "GET",
        url: `https://adonis-production-78c7.up.railway.app/api/db/file/${fileId}`,
      })
        .then((response) => {
          console.log(response);
          cb(response);
        })
        .catch((error) => {
          console.error(error);
        });
    } catch (error) {
      console.log(error);
    }
  }

  function onSelectFile(fileId) {
    handleGetFile(fileId, (res) => {
      let { fileData } = res.data;

      navigation.navigate("Assignment", {
        fileContent: fileData.file_content,
        fileTitle: fileData.file_name,
      });
    });
  }

  let fileList = files.map((file) => {
    return (
      <File
        {...file}
        key={file.file_id}
        fileName={file.file_name}
        fileId={file.file_id}
        folderId={file.folder_id}
        fileContent={file.file_content}
        handlePress={onSelectFile}
      ></File>
    );
  });

  return (
    <StyledView>
      <TopBar
        text="Library"
        color="transparent"
        handleLeft={() => navigation.navigate("Home")}
      />
      <View>
        <FileSectionCont>
          {/* {fileArr.map((o, i) => (
            <File
              key={i}
              text={o.text}
              handlePress={() => navigation.navigate("Assignment")}
            ></File>
          ))}
          <File handlePress={() => navigation.navigate("Assignment")} /> */}
          {fileList}
        </FileSectionCont>

        <StatusBar style="auto" />
      </View>
    </StyledView>
  );
}
