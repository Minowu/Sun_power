from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from app.api.products import router as products_router

app = FastAPI()

# CORS (development)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5174",
        "http://127.0.0.1:5174",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Serve static files for product images (short-term solution)
app.mount("/static", StaticFiles(directory="static"), name="static")

# API routes
app.include_router(products_router)

@app.get("/")
def read_root():
    return {"message": "Hello World"}