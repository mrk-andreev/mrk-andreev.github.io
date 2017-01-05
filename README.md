```bash
docker build -t mrkandreev_github .
docker run -p 8000:8000 -v $(pwd):/home --name mrkandreev_github -d mrkandreev_github
docker start mrkandreev_github
docker stop mrkandreev_github
```
