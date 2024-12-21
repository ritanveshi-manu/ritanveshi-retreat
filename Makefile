git_config:
    #My configs
	git config user.email "ritanveshi.manu@gmail.com"
	git config user.name "ritanveshi-manu"
install:
	brew install node
deploy:
	npm run build
	npm run deploy
build:
	npm run build
start:
	npm start