import { select, isCancel, log } from '@clack/prompts';
import { writeFile, fileExists } from '../../utils/file-operations';
import * as style from '../../styles';
import template from './template';

export async function runGitIgnore() {
  const exists = await fileExists('.gitignore');

  if (exists) {
    const overwrite = await select({
      message: `.gitignore 文件已存在。是否 ${style.danger('覆盖')}？`,
      options: [
        { value: 'yes', label: '是' },
        { value: 'no', label: '否' },
      ],
    });

    if (isCancel(overwrite) || overwrite === 'no') {
      log.message(`${style.cancelled('已取消 .gitignore 设置')}`);
      return;
    }
  }

  try {
    await writeFile('.gitignore', template);
    log.success('.gitignore file created successfully.');
  } catch (error) {
    log.error(error);
  }
}
