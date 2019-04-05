3-1 "git init"
git init
git add README.md
git commit -m "git init"
git remote add origin git@github.com:sumakokima2/react.git
git push -u origin master

3-1 "npm init"
package.jsonの追加

3-1 ".gitignore"
.gitignoreを追加することによって、node_modulesの重たいデータをリモートチポジトリに置かなくていいようにする。gitの閲覧者はpackage.jsonから必要なモジュールを"npm install"によって一括ダウンロードすることができる。