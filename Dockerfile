FROM busybox
MAINTAINER Mark Andreev <mark.andreev@gmail.com>

ENTRYPOINT cd /home && busybox httpd -f -p 8000
