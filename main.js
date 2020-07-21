const inquirer = require('inquirer');
const packages = require('./packages');

inquirer
  .prompt([
    {
      type: 'checkbox',
      name: 'list',
      message: '要安装哪些镜像源？',
      choices: [
        {
          name: 'npm',
          checked: true,
        },
        {
          name: 'yarn',
        },
        // {
        //   name: 'pip',
        // }
      ],
    }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    answers.list.forEach(item => {
      packages[item]();
    });
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
