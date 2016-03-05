# Library Miner Frontyard

## 開発に必要なもの

* node.js 0.12 以上 (最新版 node.jsのインストール方法参照)
* npm

## 起動方法

### 開発環境

```
gulp
```

詳しいコマンドは gulpfile.js 参照

### 本番用build

```
gulp build --dist
```

website 以下に圧縮済みファイルが展開される


### 最新版 node.js のインストール方法

1. node.js バージョン管理インストール

```
npm install -g n
```

2. とりあえず最新のnodejsにする

```
n latest
```

3. terminalを再度読み込み直すと、最新のnode.jsになっているはず

```
node -v
```

4. nodeをアップデートしたら、パッケージも最新化しておく

```
rm -rf node_modules # 古いパッケージは消す
npm install
```
