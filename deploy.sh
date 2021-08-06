#!/usr/bin/env sh

# 发生错误时终止
set -e

# 构建
pnpm install --frozen-lockfile
pnpm build

# 进入构建文件夹
cd dist

# 如果你要部署到自定义域名
# echo 'www.example.com' > CNAME

git init
git checkout -b gh-pages
git add -A
git commit -m 'deploy'

git push -f git@github.com:Discreater/Discreater.github.io.git gh-pages

cd -
