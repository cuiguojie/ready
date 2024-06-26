import { select, isCancel, log, text } from '@clack/prompts';
import { writeFile, fileExists } from '../../utils/file-operations';
import * as style from '../../styles';
import preset from './preset';

export async function runNvmrc() {
  const exists = await fileExists('.gitignore');

  if (exists) {
    const overwrite = await select({
      message: `.nvmrc 文件已存在。是否 ${style.danger('覆盖')}？`,
      options: [
        { value: 'yes', label: '是' },
        { value: 'no', label: '否' },
      ],
    });

    if (isCancel(overwrite) || overwrite === 'no') {
      log.message(`${style.cancelled('已取消 .nvmrc 设置')}`);
      return;
    }
  }

  const versionChoice = await select({
    message: '选择 Node.js 版本',
    options: preset.concat([{ value: 'custom', label: '自定义' }]),
  });

  let version = versionChoice;

  if (versionChoice === 'custom') {
    const customVersion = await text({
      message: '输入 Node.js 版本号，格式如：v20.10.0。不支持 lts/* 格式。',
      validate: (value) => {
        const versionRegex = /^v\d+\.\d+\.\d+$/;

        if (!versionRegex.test(value)) return '请输入有效的 Node.js 版本号。';
      },
    });

    version = customVersion;
  }

  try {
    await writeFile('.nvmrc', version as string);
    log.success('.nvmrc file created successfully.');
  } catch (error) {
    if (error instanceof Error) {
      log.error(error.message);
      return;
    } else {
      console.error(error);
    }
  }
}
