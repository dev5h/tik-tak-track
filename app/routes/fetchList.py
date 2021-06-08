from flask.json import jsonify
from app import APP, path
import json

@APP.route("/fetchList")
def fetchList():
    with open(path, "r") as fr:
        rawjson = fr.read()
        fr.close()
        return jsonify(json.loads(rawjson))