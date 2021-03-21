from flask import Flask
app = Flask(__name__)

@app.route('/')
def hello_world():
    return 'Hello, Docker!'

@app.route('/admin')
def hello_world_admin():
    return 'Hello, AdminDocker!'
