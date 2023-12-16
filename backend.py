# backend.py

from flask import Flask, render_template, jsonify, request

app = Flask(__name__)

challenges = [
    {"id": 1, "name": "Challenge 1", "flag": "flag1", "points": 100},
    {"id": 2, "name": "Challenge 2", "flag": "flag2", "points": 150},
    # Add more challenges as needed
]

@app.route("/")
def index():
    return render_template("index.html")

@app.route("/api/challenges", methods=["GET"])
def get_challenges():
    return jsonify(challenges)

@app.route("/api/submit_flag", methods=["POST"])
def submit_flag():
    data = request.get_json()
    challenge_id = data.get("challenge_id")
    submitted_flag = data.get("flag")

    # Implement XOR decryption logic with the key

    for challenge in challenges:
        if challenge["id"] == challenge_id and submitted_flag == challenge["flag"]:
            # Correct flag, increase points
            challenge["points"] += 50
            return jsonify({"status": "success", "message": f"Correct! Points: {challenge['points']}"})

    return jsonify({"status": "error", "message": "Incorrect flag"})

if __name__ == "__main__":
    app.run(debug=True)
