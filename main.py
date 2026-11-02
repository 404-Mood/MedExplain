
from pathlib import Path

from fastapi import FastAPI, HTTPException
from fastapi.responses import FileResponse

app = FastAPI(
    title="MedExplain API",
    description="Backend for MedExplain",
    version="1.0.0"
)

# Find the folder containing this main.py file
BASE_DIR = Path(__file__).resolve().parent


# Serve frontend files safely
def serve_file(filename: str):
    file_path = BASE_DIR / filename

    if not file_path.is_file():
        raise HTTPException(
            status_code=404,
            detail=f"{filename} not found"
        )

    return FileResponse(file_path)


# HOME PAGE
@app.get("/")
@app.get("/index.html")
def home():
    return serve_file("index.html")


# OTHER WEBSITE PAGES
@app.get("/doctors.html")
def doctors_page():
    return serve_file("doctors.html")


@app.get("/report.html")
def report_page():
    return serve_file("report.html")


# CSS
@app.get("/styles.css")
def styles():
    return serve_file("styles.css")


# JAVASCRIPT
@app.get("/app.js")
def app_script():
    return serve_file("app.js")


@app.get("/doctors-data.js")
def doctors_script():
    return serve_file("doctors-data.js")


# BACKEND HEALTH CHECK
@app.get("/health")
@app.get("/api/health")
def health():
    return {
        "status": "healthy",
        "app": "MedExplain"
    }


# API INFORMATION
@app.get("/api")
def api_home():
    return {
        "message": "MedExplain API is running!",
        "version": "1.0.0",
        "documentation": "/docs"
    }
