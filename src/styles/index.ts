import color from 'picocolors';

const title = (content: string) => color.bold(color.green(content));
const danger = (content: string) => color.bgRed(color.white(content));
const success = (content: string) => color.green(content);
const error = (content: string) => color.red(content);
const warning = (content: string) => color.gray(content);
const cancelled = (content: string) => color.gray(content);

export {
  title,
  danger,
  success,
  error,
  warning,
  cancelled,
};
