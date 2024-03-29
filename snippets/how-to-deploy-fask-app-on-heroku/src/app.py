import os

from flask import Flask

PORT = int(os.environ.get('PORT', '8080'))

app = Flask(__name__)


@app.route("/")
def main():
    return "Hello, World!"


if __name__ == '__main__':
    app.run(host='0.0.0.0', port=PORT)
