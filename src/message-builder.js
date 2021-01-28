const fs = require('fs').promises;


const fromFile = async (filename) => {
  const data = await fs.readFile(filename);

  return JSON.parse(data);
}


exports.messageBuilder = {
  fromFile
};
