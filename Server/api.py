from flask import Flask
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)



@app.route("/")
def home():
    return json.dumps([{"question" : "This is your first question", "options" : ["a: Very good","b:-could do better","c: need to improve","d:Fails"], "answer":"a"},{"question" : "This is your second question", "options" : ["e","f","g","h"],"answer":"g"},{"question" : "This is your third question", "options" : ["i","j","k","l"],"answer":"j"}])