touch environments/environment.json
cp environments/{environment.json,environment.json.backup}
cp environments/{environment.json.production,environment.json}
ENV=production gulp build --dist
rsync -e ssh -avz ./website/ library-miner-web:/var/www/library-miner-frontyard
cp environments/{environment.json.backup,environment.json}
