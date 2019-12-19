FROM node:10.16-stretch

COPY .babelrc \
    .eslintrc.yml \
    .nvmrc \
    package-lock.json \
    package.json \
    postcss.config.js \
    renovate.json \
    webpack.common.js \
    webpack.dev.js \
    webpack.prod.js \ 
    yarn.lock /app/

COPY site/ /app/site
COPY src/ /app/src

WORKDIR /app

RUN npm install
RUN npm run build
CMD npm run preview