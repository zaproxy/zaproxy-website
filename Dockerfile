FROM node:22

COPY package-lock.json package.json /app/

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

CMD ["npm", "run", "preview"]
