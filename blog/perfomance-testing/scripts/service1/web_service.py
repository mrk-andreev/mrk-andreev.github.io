from flask import Flask
from flask import request

app = Flask(__name__)


@app.route('/api/sum', methods=['POST'])
def endpoint():
    data = request.json
    return str(sum(data))


if __name__ == '__main__':
    app.run(port=1200)
