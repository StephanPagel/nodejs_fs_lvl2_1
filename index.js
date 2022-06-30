const data = require("./data.json");
const fs = require("fs");

const dataArray = [];

let text = "";

for (let i = 0; i < data.length; i++) {
  text += `${data[i].id} - ${data[i].title}\n${data[i].description}\n\n`;
}

fs.writeFile("data.txt", text, (err) => {
  if (err) {
    throw err;
  }
  console.log("Konvertierung erfolgreich");
});
