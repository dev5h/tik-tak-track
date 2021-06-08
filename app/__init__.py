

from flask import Flask, render_template, request, jsonify
path = "/home/shazin/.local/share/trackit/db.json"
# app = Flask(__name__, static_folder="static", template_folder="ui")
APP = Flask(__name__, static_folder="static", template_folder="ui")
from app.routes import home
from app.routes import getLocalDate
from app.routes import insertTask
from app.routes import fetchList