import sys, joblib, json

vectorizer = joblib.load("vectorizer.jb")
model = joblib.load("lr_model.jb")

def predict(text):
    transformed = vectorizer.transform([text])
    prediction = model.predict(transformed)[0]
    proba = model.predict_proba(transformed)
    
    # Return 1 for Real, 0 for Fake (matching your logic)
    confidence = float(proba[0][1] * 100) if prediction == 1 else float(proba[0][0] * 100)
    return {"label": "REAL" if prediction == 1 else "FAKE", "confidence": confidence}

if __name__ == "__main__":
    # Get text from Node.js via stdin
    input_text = sys.stdin.read()
    print(json.dumps(predict(input_text)))