FROM node:20


WORKDIR /app

# package.json update
COPY ./package.json ./

# node_modules update
COPY ./node_modules ./node_modules

# dist file COPY
COPY ./.next ./.next

# public file update
COPY ./public ./public

CMD ["npm", "run", "start"]


EXPOSE 3000