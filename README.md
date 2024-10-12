gder 0x17427ec1e97102973a713b7e33b8766409f6fc92 

## prerequisites

```
$ git clone https://github.com/TokyoToken/JasmyCoin.git
$ cd JasmyCoin
$ npm install
```

## prepare mnemonic file(.secret)
Truffleでsolidityファイルをコンパイルするためには

JasmyCoin以下、”JasmyCoin/.secret”

にmnemonicを記述した.secret というファイルをおく必要があります。

このmnemonicはあくまでもsolidityのコンパイルのために必要なものですので、
どのアカウントのmnemonicでも問題ありません。

今回はganache-cliを用いてランダムなmnemonicを用意します。

```
$ npx ganache-cli --mnemonic
```

を実行すると、HD Wallet以下にランダムに生成されたMnemonicが出ます。

この右の12文字の部分だけをコピーし、"Ctrl + C" (macの場合) でganache-cliを閉じる。

それをペーストした".secret"ファイルを作成し、プロジェクトのルートフォルダにおいてください。

## compile solidity file

コマンドがnpxなので注意
```
$ npx truffle compile
``

## check the build directory

コンパイルに成功していれば、buildファイルができていて、その中にJasmyCoin.jsonができているはず。
中身を参照すると
- "contractName"
- "abi"
- "metadata"
- "bytecode"
- "deployedBytecode"
- ...

の順番で表記されているはず。abi,bytecode,deployedBytecode
が出力されていることを確認してください。
