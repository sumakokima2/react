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

3-2 "npm install  webpack webpack-cli webpack-dev-server html-webpack-plugin --save-dev"
webpackの追加。(前回コミット時に実行済み)

3-2 "npm install  @babel/core babel-loader @babel/preset-env @babel/preset-react @babel/register --save-dev"
babelの追加

3-2 "npm install --save-dev eslint eslint-plugin-react"
eslintの追加