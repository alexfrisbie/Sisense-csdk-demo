FROM node:16.14.0
RUN mkdir -p /home/ubuntu/
WORKDIR /home/ubuntu/
RUN npx create-react-app frontend --template typescript
WORKDIR /home/ubuntu/frontend

RUN rm -rf /home/ubuntu/frontend/src\
  && rm -rf /home/ubuntu/frontend/public \
  && rm -rf /home/ubuntu/frontend/tsconfig.json\
  && rm -rf /home/ubuntu/frontend/package.json
COPY tsconfig.json /home/ubuntu/frontend/
COPY package.json /home/ubuntu/frontend/

RUN npm install --save typescript @types/node @types/react @types/react-dom @types/jest
RUN npm i @sisense/sdk-ui @sisense/sdk-data
RUN npm i @sisense/sdk-cli --save-dev
RUN npm i --save react-select
