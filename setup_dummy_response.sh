#!/bin/bash

# テストで利用するdummyデータをwebsite/data 以下に配置します

cmd="cp -rf ./dummy/* ./website/data/"
echo $cmd
`$cmd`
