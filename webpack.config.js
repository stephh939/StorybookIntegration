
const path = require("path")

module.exports = {
  mode:"development",
  entry : "./src/entry",
  output : {
    path: path.resolve(__dirname, "dist"),
    filename: "output.js"
  }
}