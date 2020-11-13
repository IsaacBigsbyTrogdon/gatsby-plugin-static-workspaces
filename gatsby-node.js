const { copySync } = require('fs-extra');

exports.onPostBuild = function(_, configOptions) {
  configOptions.folders.forEach(folder => {
    copySync(folder, configOptions.destination);
  });
};

exports.onCreateDevServer = function({ app }, configOptions) {
  console.log(configOptions)
  configOptions.folders.forEach(folder => {
    app.use(require('express').static(folder));
  });
};
