const path = require('path');
module.exports = (key, value) => {
  if (typeof value === 'string') {
    return value;
  }

  const manifest = value;

  Object.keys(manifest).forEach((src) => {
    var key = src.split('.')[1];
    manifest[key] = manifest[src];

    // got rid of exrensions and replaced with file type
    delete manifest[src];
  });
  console.log(manifest);
  return manifest;
};