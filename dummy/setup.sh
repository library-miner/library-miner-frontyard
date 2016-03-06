#!/bin/bash

# テストで利用するdummyデータをwebsite/data 以下に配置します

scriptPath=`dirname $0`;
cmd="cp -rf dummy/* ./website/data/"
echo $cmd
`$cmd`
