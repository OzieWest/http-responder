### Echo server

On any request, server will responde with HEADERS, BODY, COOKIES, QUERY. For testing purpose

#### build
```bash
captain build
# or
docker build -t soramusoka/http-responder .
```

#### run
```bash
docker run --rm -d -p 3000:3000 soramusoka/http-responder
```
