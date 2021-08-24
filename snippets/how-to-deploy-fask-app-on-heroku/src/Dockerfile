FROM python:3.9.6-slim
WORKDIR /opt/app

COPY requirements.txt ./requirements.txt
RUN pip install  --default-timeout=1000 --prefer-binary --no-cache-dir -r ./requirements.txt
COPY . .
USER 1001
ENTRYPOINT ["bash", "main.bash"]
