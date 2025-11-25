build:
  npm run build

biome:
  npx biome check --write --diagnostic-level='error'

biome_migrate:
  npx biome migrate --write

install:
  npm install

dev:
    tmux new-session -d -s "doc"
    tmux send-keys -t "doc" "npm run dev" ENTER

open:
    open "http://localhost:3333/"
