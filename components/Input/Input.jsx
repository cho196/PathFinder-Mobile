import styled from 'styled-components/native';
import { colors, textData } from "../../styles/globals";
import { StyleSheet, Text, View, Button, Input, Select} from 'react-native';

const InputCont = styled.Input`
  border-radius: ${(props) => props.borderRadius || "3.125rem"};
  border: ${(props) => props.border || `0.05rem solid ${colors.darkGray}`};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height};
`;

const OptionCont = styled.Select`
  border-radius: 2rem;
  border: 0.05rem solid ${colors.darkGray};
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  padding: 1rem;
`;

export default function Inputt({
  height = "100%",
  width = "100%",
  type = "text",
  value = "",
  borderRadius = "3.125rem",
  placeholder = "placeholder",
  border = "",
  onChange = () => { }
}) {
  if (type === "dropdown") {
    return (
      <OptionCont
        type="option"
        width={width}
        value={value}
        onChange={onChange}>
        <option
          value="Open Sans" >
          Open Sans
        </option>
        <option
          value="Arial">
          Arial
        </option>
      </OptionCont>
    );
  } else {
    return (
      <InputCont
        borderRadius={borderRadius}
        type={type}
        placeholder={placeholder}
        width={width}
        onChange={onChange}
        defaultValue={value}
        border={border}
        height={height}
      ></InputCont>
    );
  }
}
