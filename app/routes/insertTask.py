from app import APP, request, path
import json
import os

@APP.route("/insert-task", methods=["POST"])
def insertTask():
    
    
    
    #Firstly Fetch the json
    rawJson = open(path, "r")
    dataObj = json.load(rawJson)
    rawJson.close()
    print(dataObj)
    try:
        dataLength = len(dataObj)
        data = {
            "id": dataLength +1 ,
            "date" : request.form["date"],
            "targetTime" : request.form["targetTime"],
            "achievedTime" : request.form["achievedTime"],
            "subjects" : request.form["subjects"]
        }
        dataObj.append(data)
        with open(path, "w") as f:
            f.write(json.dumps(dataObj))
        
        return "succeed"
    except Exception as e:
        return e