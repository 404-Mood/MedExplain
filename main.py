from fastapi import FastAPI

app = FastAPI(
    title="MedExplain API",
    description="Backend for MedExplain",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "MedExplain backend is running!"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }