import styled from "styled-components/native";

export const Wrapper = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const textData = {
  lineHeight: "150%",
  letterSpacing: "0.22em",
  h1: {
    size: "2.375rem",
    fontWeight: "700",
  },
  h2: {
    size: "1.5rem",
  },
};

export const logoData = {
  favicon: "../images/icon.svg",
  logoHorizontal: "../images/logo-horizontal.svg",
  logoVertical: "../images/logo-vertical.svg",
  logoIcon: "../images/logo-icon.svg",
  logoTypeface: "../images/logo-typeface.svg",
};

export const colors = {
  primaryBlue: "#96ADFC",
  secondaryBlue: "#C3D1FF",
  backgroundWhite: "#FFFFFC",
  backgroundYellow: "#F3F0E1",
  backgroundLightYellow: "#FFFDF2",
  backgroundCream: "#FFFEF7",
  buttonPrimaryBlue: "#C3D1FF",
  buttonSecondaryBlue: "#96ADFC",
  buttonLightBlue: "#E5EbFF",
  buttonGrey: "#CACACA",
  buttonTextGrey: "#9F9F9F",
  textBlack: "#000000",
  darkGrey: "#3E3E3E",
  lightGrey: "#E1E1E1",
  buttonLightGrey: "#F5F5F5",
  grey: "#D9D9D9",
};

// export const Flexbox = styled.View`
//   display: flex;
//   flex-direction: ${(props) => props.dir || "column"};
//   align-items: center;
//   justify-content: center;
// `;

// export const Wrapper = styled(Flexbox)`
//   align-items: start;
//   justify-content: start;
//   width: 100vw;
//   height: 100vh;
//   margin: 0 auto;
//   gap: 2.5rem;
//   padding: 8rem;
// `;

export const BodyText = styled.Text`
  font-size: 1em;
  margin: 0;
  width: fit-content;
  line-height: ${textData.lineHeight};
  letter-spacing: ${textData.letterSpacing};
`;

// export const Container = styled(Flexbox)`
//   width: ${(props) => props.width || "90%"};
//   max-width: 100%;
//   height: ${(props) => props.height || "fit-content"};
//   padding: 2em;
//   border: 2rem solid ${colors.darkGray};
//   background-color: ${(props) =>
//     props.backgroundColor || colors.backgroundWhite};
//   border-radius: 2rem;
//   gap: ${(props) => props.gap};
//   // white-space: pre-line;
//   // align-items: ${(props) => props.alignItems || "flex-start"}
// `;
