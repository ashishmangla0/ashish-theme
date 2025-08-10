// This exports theme file paths for consumers
const path = require("path");

module.exports = {
  light: path.join(__dirname, "dist/en-us/themes.scss"),
  dark: path.join(__dirname, "dist/intl/theme.scss"),
  blue: path.join(__dirname, "dist/ko-kr/theme.scss"),
};