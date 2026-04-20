const express = require('express');
const { spawn } = require('child_process');
const path = require('path');
const app = express();
const colors = require("colors");

app.set('view engine', 'ejs');
app.use(express.static('public')); // This is why CSS might be missing
app.use(express.urlencoded({ extended: true }));

const REAL_EXAMPLE = "WASHINGTON (Reuters) - The government announced a new economic policy aimed at boosting growth.";
const FAKE_EXAMPLE = "Breaking!!! Secret cure discovered but hidden by media!!!";

// Route for the Home Page
app.get('/', (req, res) => {
    const sample = req.query.sample;
    let news_input = "";
    
    if (sample === 'real') news_input = REAL_EXAMPLE;
    if (sample === 'fake') news_input = FAKE_EXAMPLE;

    res.render('index', { 
        news_input: news_input,
        word_count: news_input ? news_input.split(/\s+/).length : 0,
        warning: null,
        result_label: null,
        result_class: null,
        confidence_percent: null
    });
});

// Route for the Prediction
app.post('/predict', (req, res) => {
    const news_input = req.body.news_input || "";
    const word_count = news_input.trim() ? news_input.split(/\s+/).length : 0;

    if (word_count < 5) {
        return res.render('index', {
            news_input, word_count, warning: "Please enter at least 5 words.",
            result_label: null, result_class: null, confidence_percent: null
        });
    }

    // Call Python script
    const python = spawn('python3', ['predict.py']);
    let dataString = '';

    python.stdin.write(news_input);
    python.stdin.end();

    python.stdout.on('data', (data) => { dataString += data.toString(); });
    python.on('close', () => {
        try {
            const result = JSON.parse(dataString);
            res.render('index', {
                news_input,
                word_count,
                warning: null,
                result_label: result.label === "REAL" ? "✅ REAL NEWS" : "❌ FAKE NEWS",
                result_class: result.label.toLowerCase(),
                confidence_percent: result.confidence
            });
        } catch (e) {
            res.send("Error processing model prediction.");
        }
    });
});

app.listen(5000, () => {
    console.log(`🔥 Starting Express Server at http://localhost:5000`.green);
    console.log(`--------------------------------------------------`.cyan);
    }
);
