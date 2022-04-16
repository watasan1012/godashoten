# godashoten.github.io

## stylelint導入

Node.jsが既にインストールされている必要があります。

```shell
$ node -v
```

vXX.XX.X などバージョンが表示されなかったら、Node.jsをインストールする。

```shell
$ npm -v
```

.git ファイルがあるディレクトリに移動する。(githubのローカルリポジトリ)

### package.json の作成　　

```shell
$ npm init -y
```

### npm パッケージのインストール

```shell
$ npm install --save-dev stylelint stylelint-config-standard
```

### vscode のPrettieと同時に実行したいので以下のコマンドを実行する

```shell
npm install --save-dev stylelint-config-prettier
```

### stylelintの設定ファイルを作成する

```shell
$ touch .stylelintrc.json
```

### .stylelintrc.json の中身は

```shell
{
  "extends": ["stylelint-config-standard", "stylelint-config-prettier"]
}
```

### stylelintの実行方法

```shell
% npx stylelint css/*.css 
```

## .gitignore の作成

.gitignoreファイルは、git対象からファイル、ディレクトリを外します。

```shell
% touch .gitignore
```

.gitignoreファイルには以下を記載する

```.gitignore
# ファイルを指定する
.DS_Store
.stylelintrc.json
package.json
package-lock.json

# ディレクトリを指定する
node_modules/
```
