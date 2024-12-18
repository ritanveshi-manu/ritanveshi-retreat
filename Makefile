git_config:
	git config user.email "ritanveshi.manu@gmail.com"
	git config user.name "ritanveshi-manu"
deploy:
	npm run build
	npm run deploy
start:
	npm start
gh_pages:
	git checkout gh-pages
	git merge main
	git push origin gh-pages
	git checkout main