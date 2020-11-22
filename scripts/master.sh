#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

git add .
git commit -m 'push'
git push -f https://github.com/wangxifa/waw.git master
# git push --set-upstream origin gh-pages
