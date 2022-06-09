SHELL := /bin/bash

DIST ?= dist

.PHONY: prepare
prepare:
	npx husky install

.PHONY: lint
lint:
	npx eslint --ext .js,.jsx,.ts,.tsx,.vue --fix
	npx stylelint "src/**/*.{css,scss,vue}" --fix
	npx prettier . --write

.PHONY: format
format:
	npx prettier --config .prettierrc . --write

.PHONY: dev
dev: 
	npx vite --mode development

.PHONY: build
build: 
	npx vue-tsc --noEmit && npx vite build --mode production

.PHONY: preview
start: build
	npx vite preview