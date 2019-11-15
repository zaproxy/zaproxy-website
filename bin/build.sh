#!/bin/bash

set -e

BUILD_HASH=$(git log -1 --pretty=format:"%h")
DEFAULT_DIR="./build-${BUILD_HASH}"
TARGET_DIR=$(realpath "${1:-$DEFAULT_DIR}")

build_api_docs()
{
    local output="$1"
    if [ ! -d zap-api-docs ]
    then
        git clone https://github.com/zaproxy/zap-api-docs
    fi
    cd zap-api-docs
    git pull
    bundler install
    bundle exec middleman build --clean
    cp -rf ./build/ "${output}/docs/api"
}

build_docker()
{
    echo '[i] Building with docker'
    local output="$1"
    docker build . -t zaproxy-website
    container_id=$(docker run --rm  -d zaproxy-website  sleep 20)
    docker cp "$container_id:/app/dist/" "${output}"
}

build_local()
{
    echo '[i] Building using local nodejs'
    local output="$1"
    npm run build
    cp -rf ./dist "${output}"
}


echo "[i] Starting build "

if (command -v docker)
then
    build_docker "${TARGET_DIR}"
else
    build_local "${TARGET_DIR}"
fi

build_api_docs "${TARGET_DIR}"

echo "[i] Output build into: ${TARGET_DIR}"
