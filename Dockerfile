FROM node:10.16-stretch

COPY .babelrc \
    .eslintrc.yml \
    .nvmrc \
    package-lock.json \
    package.json \
    postcss.config.js \
    webpack.common.js \
    webpack.dev.js \
    webpack.prod.js /app/

WORKDIR /app

RUN npm install

COPY site/ /app/site
COPY src/ /app/src

RUN npm run build
CMD npm run preview
