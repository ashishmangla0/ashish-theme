// This exports theme file paths for consumers
const path = require("path");

module.exports = {
  light: path.join(__dirname, "themes/light.scss"),
  dark: path.join(__dirname, "themes/dark.scss"),
  blue: path.join(__dirname, "themes/blue.scss"),
};