const fs = require('fs');
const { exec } = require('child_process');
const process = require('process');

const { HOME } = process.env;
const PIP_CONFIG_PATH = `${HOME}/.pip/pip.conf`;

const ALIYUN_INDEX = 'http://mirrors.aliyun.com/pypi/simple/';
const ALIYUN_MIRROR = 'mirrors.aliyun.com';

const config = `[global]
trusted-host =  ${ALIYUN_MIRROR}
index-url = ${ALIYUN_INDEX}
`;

const successConsole = `pip配置修改成功:
index: ${ALIYUN_INDEX}
mirror: ${ALIYUN_MIRROR}
`
const createPipConfigFile = () => {
  fs.open(PIP_CONFIG_PATH, 'w', 0644, function(err, fd){
    if (err) {
      return console.log(`1321 ${err}`);
    }

    fs.write(fd, config, function(e){
      if (e) {
        return console.log(e);
      }

      console.log(successConsole);

      fs.closeSync(fd);
    });
  });
};

// 没有.pip目录，直接创建文件
fs.stat(`${HOME}/.pip`, (err, stat) => {
  if (err && err.code === 'ENOENT') {
    exec(`cd ${HOME}; mkdir .pip`, () => {
      createPipConfigFile();
    });
  } else{
    console.log(stat)
  }
})