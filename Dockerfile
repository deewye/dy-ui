ARG NODE_IMAGE=node:21
ARG NGINX_IMAGE=nginx:alpine

FROM ${NODE_IMAGE} as builder

WORKDIR /code

ADD . .

RUN npm install
RUN npm run build

FROM ${NGINX_IMAGE}

COPY --from=builder /code/dist/ /usr/share/nginx/html
