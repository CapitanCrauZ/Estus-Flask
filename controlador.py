from ast import Return
from distutils.log import debug
from django.shortcuts import render
from flask import Flask, render_template
app = Flask(__name__)
soporte = Flask(__name__)

@app.route('/')

def inicio(name=None):
    return render_template('index.html')

if __name__ == '__main__':
    app.run('127.0.0.1', 5000, debug=True)
