const inquirer = require('inquirer');

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
          name: 'pip',
          checked: true,
        }
      ],
    }
  ])
  .then(answers => {
    // Use user feedback for... whatever!!
    console.log(JSON.stringify(answers));
  })
  .catch(error => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else when wrong
    }
  });
