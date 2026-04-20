
---

# 🚀 TruthEngine: Neural Verification System

**TruthEngine** is a high-performance web application designed to detect misinformation in news articles using Machine Learning. Built with a decoupled architecture, it leverages a **Node.js/Express** frontend to manage user interactions and a **Python/Scikit-Learn** backend to perform heavy linguistic analysis.

---

## 🛠️ System Architecture

TruthEngine utilizes a "Bridge Pattern" to connect two distinct environments:
* **Frontend Engine:** Node.js & Express.js with EJS Templating.
* **Analysis Core:** Python 3 using Logistic Regression and TF-IDF Vectorization.
* **Styling:** Modern Glassmorphic UI with integrated Markdown documentation.

---

## ⚡ Features

* **Real-time Analysis:** Processes articles and returns a "Truth Score" in seconds.
* **Hybrid Stack:** Demonstrates seamless integration between Node.js and Python processes.
* **Glassmorphic UI:** A stylish, futuristic dashboard with animated loaders and mesh gradients.
* **Documentation-as-Code:** Integrated Markdown viewer for technical project details.
* **One-Click Deployment:** Includes an automated Bash orchestrator for environment setup.

---

## 📂 Project Structure

```text
.
├── public/              # Static assets (CSS, images, loader logic)
├── views/               # EJS templates (UI components)
├── app.js               # Express server (The Orchestrator)
├── predict.py           # Python ML Bridge (The Brain)
├── lr_model.jb          # Trained Logistic Regression model
├── vectorizer.jb        # TF-IDF Vectorizer
├── setup_and_run.sh     # Automation script
├── requirements.txt     # Python dependencies
└── package.json         # Node.js dependencies
```

---

## 🚀 Getting Started

### Prerequisites
* [Node.js](https://nodejs.org/) (v16+)
* [Python 3.x](https://www.python.org/)
* Pip (Python Package Manager)

### Installation & Launch
The easiest way to get started is using the automated setup script. Open your terminal and run:

```bash
# 1. Clone the repository
git clone https://github.com/krishsrivastava-sys/TruthEngine.git
cd truthengine

# 2. Make the script executable
chmod +x setup_and_run.sh

# 3. Run the installer and start the server
./setup_and_run.sh
```

The application will be live at `http://localhost:5000`.

---

## 🧪 Machine Learning Methodology

The core model was trained on a dataset of over 40,000 labeled news articles. 

1.  **Text Preprocessing:** Removal of stop words and special characters.
2.  **Vectorization:** TF-IDF (Term Frequency-Inverse Document Frequency) to evaluate word importance.
3.  **Classification:** A Logistic Regression model predicts the probability of an article being "Real" vs "Fake."

---

## 👥 The Team

* **Krish Srivastava** — Backend and Front End Lead
* **Harsh Agarwal** — Documentation and Data Engineering
* **Shaurya Kumar** — AI Model Lead
---