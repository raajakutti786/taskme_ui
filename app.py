from flask import Flask, request, render_template
import requests

app = Flask(__name__)

@app.route('/')
def index():
    return render_template ("index.html")
    
@app.route('/dbsave')
def dbsave():
    response = requests.get(url="http://localhost:3000/dbsave")
    #response = requests.post(url="http://0.0.0.0:3000/", data=paras)
    return str(response.text)

if __name__ == '__main__':
    app.run(host="localhost", port=5000, debug=True)

