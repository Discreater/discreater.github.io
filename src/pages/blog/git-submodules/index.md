---
title: Git Submodules 总结
tags: "git"
date: "2021-08-6"
---

# Git Submodules 总结 [WIP]

ref: https://git-scm.com/book/en/v2/Git-Tools-Submodules

## 基础命令

### 添加

```bash
git add [<options>] [--] <repository> [<path>]
```

若 `path` 为空，默认添加至项目根目录中与子模块同名的文件夹。

执行该命令后，会新建或增加新的记录到 `.gitmodules` 文件中。

### clone

1. clone 时拉取所有子模块
```bash
git clone --recurse-submodules <repository>
```

2. clone 后拉取子模块
```bash
git submodule update --init --recursive
```
- `update` 命令拉取所有数据并 checkout 到正确的 commit。
- `--init` 初始化本地配置文件。
- `--recursive` 递归执行

### 移除

- 只移除本地的子模块文件, 不改变 git 记录，`init` 命令的反命令。若对文件有更改，则需要 `-f` 选项。
```bash
git submodule deinit [-f] -- [<path>]
```

- 完全移除
```bash
git submodule deinit -f -- [<path>]
git rm -f <path>
# sh
rm -rf .git/modules/<path>
# powershell
rm -Force .git\modules\egui
```

## 使用场景

### 1. 只使用子模块而不修改

#### 若子模块仓库上游有更新

- 在子模块目录中
```bash
git fetch
git merge <branch>
```
- 在主目录（默认更新 master， 省略 path 将会更新所有子模块）
```bash
git submodule update --remote <path>
```

此时会在主目录留下子模块更新的记录。

#### 若主仓库中更新了子模块
```bash
git pull
git submodule update --init --recursive
```
或（Git 2.14后）
```bash
git pull --recurse-submodules
```

> 注意：若 `.gitmodules` 中的 URL 变化，则 `git pull --recurse-submodules` 会失败。
此时需要执行 
```bash
git submodule sync --recursive
git submodule update --init --recursive
```

### 1.在主项目中修改子模块

拉取远程主项目的更改
```bash
git submodule update --remote --rebase
# or 
git submodule update --remote --merge
```

本地修改
```bash
cd <submodule>
vim somefile # 修改 submodule
git commit
```

> TODO...
发布子模块的修改
```bash

```




