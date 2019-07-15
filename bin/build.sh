#!/bin/bash

set -e

TARGET_DIR="${1:-./}"

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
    cp -r ./dist "${output}"
}


echo "[i] Starting build "

if (command -v dockecr)
then
    build_docker "${TARGET_DIR}"
else
    build_local "${TARGET_DIR}"
fi

echo "[i] Output build into: "${TARGET_DIR}""
