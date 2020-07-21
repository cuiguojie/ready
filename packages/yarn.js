const taobaoNPM = 'https://registry.npm.taobao.org';
const { exec } = require('child_process');

const task = function () {
  exec(`yarn config set registry ${taobaoNPM}`, (err, stdout, stderr) => {
    if (err) {
      console.log(stderr);
    } else {
      console.log(`Yarn 源改为 ${taobaoNPM}`);
    }
  });
};

module.exports = task;
