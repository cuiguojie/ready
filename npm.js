const { exec } = require('child_process');

const taobaoNPM = 'https://registry.npm.taobao.org';

exec(`npm config set registry ${taobaoNPM}`, (err, stdout, stderr) => {
  if (err) {
    console.log(stderr);
  } else {
    console.log(`NPM源改为 ${taobaoNPM}`);    
  }
});
