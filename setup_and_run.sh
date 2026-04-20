#!/bin/bash

# --- Colors for pretty output ---
GREEN='\033[0;32m'
CYAN='\033[0;36m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${CYAN}🚀 Initializing TruthEngine Environment...${NC}"

# 1. Install Node.js dependencies
if [ -f "package.json" ]; then
    echo -e "${YELLOW}📦 Installing Node.js modules...${NC}"
    npm install
else
    echo -e "${RED}❌ Error: package.json not found!${NC}"
    exit 1
fi

# 2. Install Python dependencies
if [ -f "requirements.txt" ]; then
    echo -e "${YELLOW}🐍 Installing Python dependencies...${NC}"
    # Using --quiet to keep the terminal clean
    pip install -r requirements.txt --quiet
else
    echo -e "${RED}❌ Error: requirements.txt not found!${NC}"
    exit 1
fi

# 3. Check for model files (Crucial for MSE-SS style system checks)
echo -e "${YELLOW}🔍 Verifying Machine Learning models...${NC}"
if [ -f "lr_model.jb" ] && [ -f "vectorizer.jb" ]; then
    echo -e "${GREEN}✅ Models found.${NC}"
else
    echo -e "${YELLOW}⚠️ Warning: Model files (.jb) are missing. Prediction will fail.${NC}"
fi

# 4. Launch the application
echo -e "${GREEN}🔥 Starting Express Server at http://localhost:5000${NC}"
node app.js