install:
	npm ci

build:
	vite build

develop:
	vite

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

.PHONY: test