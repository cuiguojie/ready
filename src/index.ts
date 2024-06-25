import { intro, outro, select, isCancel } from "@clack/prompts";
import { runEditorConfig, runGitIgnore } from './packages';
import * as style from './styles';

async function main() {
    intro('Welcome to the Config Tool');

    const tasks = [
      '.editorconfig',
      '.gitignore',
      // 'Nvmrc'
    ];
    for (const task of tasks) {
      const run = await select({
        message: `Do you want to set up ${style.title(task)}?`,
        options: [
          { value: 'yes', label: '是' },
          { value: 'no', label: '否' },
        ],
      });

      if (isCancel(run)) {
        outro(`${style.cancelled('已撤销')}`);

        process.exit(0);
      }

      if (run === 'yes') {
        switch (task) {
          case '.editorconfig':
            await runEditorConfig();
            break;
          case '.gitignore':
            await runGitIgnore();
            break;
        //   case 'Nvmrc':
        //     await runNvmrc();
        //     break;
        }
      }
    }

    outro(`${style.success('配置完毕!')}`);
  }

  main().catch(console.error);
