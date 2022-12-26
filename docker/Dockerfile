FROM nginx:1.23.3-alpine-slim

MAINTAINER Nobody <goodluck@noonecares.com>

COPY dist/entry-page/ /usr/share/nginx/html/
COPY nginx/nginx.conf /etc/nginx/nginx.conf
COPY nginx/security-headers.conf /etc/nginx/security-headers.conf
