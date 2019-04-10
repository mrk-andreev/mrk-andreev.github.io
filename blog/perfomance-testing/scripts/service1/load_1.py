import requests


if __name__ == '__main__':
    response = requests.post('http://localhost:1200/api/sum', json=[1, 2, 3])
    print(response.text)
