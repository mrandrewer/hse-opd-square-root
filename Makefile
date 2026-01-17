install:
	npm ci

build:
	npx vite build

develop:
	npx vite

lint:
	npx eslint .

lint-fix:
	npx eslint . --fix

.PHONY: test