NAME  	:= $(shell npm run get-name --silent)
TAG   	?= $(shell npm run get-version --silent)
USER_ID ?= $(shell stat -c "%u:%g" .)
REPO  	:= suits-ims
IMAGE 	:= ${REPO}/${NAME}:${TAG}

DOCKER_REGISTRY     := registry.heroku.com

HEROKU_API_TOKEN    := ${HEROKU_API_TOKEN}
HEROKU_APP_NAME     := ${HEROKU_APP_NAME}
HEROKU_PROCESS_TYPE := web
HEROKU_APP_TAG      := ${DOCKER_REGISTRY}/${HEROKU_APP_NAME}/${HEROKU_PROCESS_TYPE}

NPM ?= ${DOCKER_COMPOSE} run --rm npm
DOCKER ?= docker
HEROKU ?= heroku

BRANCH_NAME ?= $(shell git rev-parse --abbrev-ref HEAD 2>/dev/null)
DOCKER_PROJECT_MODIFICATOR := $(shell echo ${BRANCH_NAME} | sed 's@origin/@@' | sed 's@/@_@')
DOCKER_COMPOSE_OPTS ?= --project-name ${NAME}-${DOCKER_PROJECT_MODIFICATOR}

DOCKER_COMPOSE ?= \
    docker-compose ${DOCKER_COMPOSE_OPTS} -f ./docker/docker-compose.services.yml

run-services:
	${DOCKER_COMPOSE} up

.PHONY: run-services

image:
	${DOCKER} build -t ${IMAGE} -f docker/Dockerfile .

deploy:
	${DOCKER} login --username=_ --password=${HEROKU_API_TOKEN} ${DOCKER_REGISTRY}
	${DOCKER} tag ${IMAGE} ${HEROKU_APP_TAG}
	${DOCKER} push ${HEROKU_APP_TAG}
	${HEROKU} container:release ${HEROKU_PROCESS_TYPE} -a ${HEROKU_APP_NAME}

.PHONY: image deploy

clean-docker: DOCKER_COMPOSE_FILES := $(sort $(wildcard ./docker/docker-compose*.yml))
clean-docker: DOCKER_COMPOSE_FILES := $(patsubst %.yml,-f %.yml, ${DOCKER_COMPOSE_FILES})
clean-docker:
	${DOCKER_COMPOSE} ${DOCKER_COMPOSE_FILES} stop
	${DOCKER_COMPOSE} ${DOCKER_COMPOSE_FILES} rm --force -v
.PHONY: clean-docker
