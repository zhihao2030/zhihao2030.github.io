npm run build

cd public

git init
git add -A
git commit -m 'deploy'

git push -f git@github.com:zhihao2030/zhihao2030.github.io.git master

cd ../
rm -rf public