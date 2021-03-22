import requests

from flask import Flask, request
app = Flask(__name__)

@app.route('/')
def default():
    return 'Welcome To TaskME!'

@app.route('/dbsave')
def dbsave():
    response = requests.get(url="http://host.docker.internal:3000/")
    #response = requests.post(url="http://0.0.0.0:3000/", data=paras)
    print(response.text)
    return str(response.text)

# if __name__ == '__main__':
#     app.run(host="taskmeui", port=8000, debug=True)

