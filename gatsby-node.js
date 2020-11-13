const { copySync } = require('fs-extra');

exports.onPostBuild = function(_, configOptions) {
  configOptions.folders.forEach(folder => {
    copySync(folder, configOptions.public);
  });
};

exports.onCreateDevServer = function({ app }, configOptions) {
  configOptions.folders.forEach(folder => {
    app.use(require('express').static(folder));
  });
};
