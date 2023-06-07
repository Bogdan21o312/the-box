# Work project

run:
	yarn install
	docker-compose up -d

stop:
	docker-compose stop

restart:
	make stop
	make run

# Lint

lc:
	yarn lint

lf:
	yarn lint:fix

lint:
	make lf
	make lc

# Autonatio create

com:
	yarn generate-react component $(filter-out $@,$(MAKECMDGOALS))

ui:
	yarn generate-react component $(filter-out $@,$(MAKECMDGOALS)) --type=UI

hk:
	yarn generate-react component $(filter-out $@,$(MAKECMDGOALS)) --type=hook

en:
	yarn generate-react component $(filter-out $@,$(MAKECMDGOALS)) --type=entites

ft:
	yarn generate-react component $(filter-out $@,$(MAKECMDGOALS)) --type=features

lt:
	yarn generate-react component $(filter-out $@,$(MAKECMDGOALS)) --type=layout
