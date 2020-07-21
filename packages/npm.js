const taobaoNPM = 'https://registry.npm.taobao.org';
const { exec } = require('child_process');

const task = function () {
  exec(`npm config set registry ${taobaoNPM}`, (err, stdout, stderr) => {
    if (err) {
      console.log(stderr);
    } else {
      console.log(`NPM 源改为 ${taobaoNPM}`);
    }
  });
};

module.exports = task;
