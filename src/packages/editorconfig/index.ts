import { select, isCancel, log } from '@clack/prompts';
import { writeFile, fileExists } from '../../utils/file-operations';
import template from './template';
import * as style from '../../styles';

export async function runEditorConfig() {
  const exists = await fileExists('.editorconfig');

  if (exists) {
    const overwrite = await select({
      message: `.editorconfig 文件已存在。是否 ${style.danger('覆盖')}？`,
      options: [
        { value: 'yes', label: '是' },
        { value: 'no', label: '否' },
      ],
    });

    if (isCancel(overwrite) || overwrite === 'no') {
      log.message(`${style.cancelled('已取消 .editorConfig 设置')}`);
      return;
    }
  }

  try {
    await writeFile('.editorconfig', template);
    log.success('.editorconfig file created successfully.');
  } catch (error) {
    log.error(error);
  }
}
