# @cuiguojie/ready

这是一个交互式的命令行工具，它可以帮助你快速设置一些工程相关的配置文件。目前支持的配置文件包括：

- [x] `.editorconfig`
- [x] `.gitignore`
- [ ] `.nvmrc`
- [ ] `commitlint` 相关配置

## 使用

最简单的方式，在你的 **项目根目录** 使用 `npx @cuiguojie/ready` 命令即可，不需要安装。

> 如果你使用 pnpm，则可以使用 `pnpm dlx @cuiguojie/ready` 命令。

工具会通过交互式询问的方式，引导你在所在目录生成所需的配置文件。


## 为什么要使用这个工具？
一般情况下，如果是创建完整的正式项目，会有诸如 [vitesse](https://github.com/antfu-collective/vitesse) 这样的工具，它们会帮你生成一个完整的项目模板，包括配置文件、依赖等等。

但是有时候，我们只是想开一个简单的项目，这个时候去逐个配置 （~~复制粘贴~~）工程配置文件就显得有点繁琐。这个工具，更像 [dotfiles](https://github.com/mathiasbynens/dotfiles) 这样的工具，只是帮你快速生成一些配置文件，让你可以更快地开始一个项目。
