FROM node:14.18-stretch

COPY package-lock.json package.json  /app/

WORKDIR /app

RUN npm install

COPY .babelrc \
    .eslintrc.yml \
    .nvmrc \
    postcss.config.js \
    webpack.common.js \
    webpack.dev.js \
    webpack.prod.js /app/
    
COPY site/ /app/site
COPY src/ /app/src

RUN npm run build
CMD npm run preview
