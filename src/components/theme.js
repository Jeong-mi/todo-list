// 반응형 디자인을 위한 픽셀 컨버팅 함수
const pixelToRem = (size) => `${size / 16}rem`;
const remToPixel = (size) => `${size * 16}px`;

const colors = {
  gray300: "rgb(209 213 219)",
  gray400: "rgb(156 163 175)",
  green100: "rgb(220 252 231)",
  green400: "rgb(74 222 128)",
  slate100: "rgb(241 245 249)",
  slate200: "rgb(226 232 240)",
  tooltip: "#7689fd",
  edit: "#1400FF",
  remove: "#FF0000",
  checked: "#A0F592",
  plus: "#8AE2A8",
  cancel: "#F18086",
};

const fontSizes = {
  xl: `
    font-size: 1.25rem;
    line-height: 1.75rem`,
  xl3: `
    font-size: 1.875rem;
    line-height: 2.25rem`,
  xl4: `
    font-size: 2.25rem;
    line-height: 2.25rem`,
};

const theme = { colors, fontSizes };

export default theme;
