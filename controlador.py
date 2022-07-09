from distutils.log import debug
from flask import Flask, render_template

app = Flask(__name__)
soporte = Flask(__name__)

#HOME
@app.route('/')
#funciones
def home(name=None):
    return render_template('home/index.html')

#SHOP
@app.route('/shop/')
#funciones
def shop(name='shop'):
    return render_template('shop/index.html')

#settings
if __name__ == '__main__':
    app.run('127.0.0.1', 5000, debug=True)
