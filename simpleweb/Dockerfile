# specify a base image that contains npm
FROM node:14-alpine

# set default work dir, then copy cmd will copy to this dir
WORKDIR /usr/app
# install some dependencites
COPY ./package.json ./
RUN npm install
# copy all files from src to des (container)
COPY ./ ./
# Default command
CMD ["npm", "start"]