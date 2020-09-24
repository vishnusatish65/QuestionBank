from flask import Flask
import json

app = Flask(__name__)

@app.route('/')
def home():
    print("hi")
    return json.dumps([{"question" : "This is your first question", "options" : ["a: Very good","b:-could do better","c: need to improve","d:Fails"], "answer":"a"},{"question" : "This is your second question", "options" : ["e","f","g","h"],"answer":"g"},{"question" : "This is your third question", "options" : ["i","j","k","l"],"answer":"j"}])

print("hi")