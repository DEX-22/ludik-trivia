#!/usr/bin/env  sh

# abort on errors
set -e

# build
npm run build  

# if [ ! -d 'dist'] then
#     mkdir dist
# fi

cd dist

#http
# https://github.com/DEX-22/ludik-trivia.git
repository=git@github.com:DEX-22/ludik-trivia.git
  
git init
git add -A
git branch -m gh-pages
git commit -m 'deploy'
git remote add deploy "$repository"

# git switch gh-pages
git push -f  deploy gh-pages

cd -