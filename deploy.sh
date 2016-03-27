ENV=production gulp build --dist
rsync -e ssh -avz ./website/ library-miner-web:/var/www/library-miner-frontyard
