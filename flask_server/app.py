from flask import Flask, render_template, request, jsonify
import sqlite3
from flask_cors import CORS

app = Flask(__name__)
#route to get data from frondend
@app.route('/update', methods =['POST','GET'])
def home():
    print(request.headers)  
    data = request.get_json() 

    if not data or 'task' not in data:
        return jsonify({'error': 'Invalid input'}), 400

    task = data.get('task')
    conn = sqlite3.connect('todo.db')
    cursor = conn.cursor()
    cursor.execute("INSERT INTO tasks (task) VALUES (?)", (task)) #send data to table
    conn.commit()
    conn.close()
    return jsonify({'message': 'Task added successfully!'}), 200

if __name__== '__main__':
    app.run(debug=True)
