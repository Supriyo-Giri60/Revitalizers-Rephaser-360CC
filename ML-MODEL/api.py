import pickle
import numpy as np
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow requests from React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change to match your React frontend port
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods (GET, POST, etc.)
    allow_headers=["*"],  # Allow all headers
)

with open("model.pkl", "rb") as f:
    model = pickle.load(f)

class SalesRequest(BaseModel):
    day: int
    month: int
    year: int
    product_id: int
    stock_level: int

@app.post("/predict")
def predict_sales(data: SalesRequest):
    # Prepare input data for the model
    input_data = np.array([[data.day, data.month, data.year, data.product_id, data.stock_level]])
    
    # Get prediction
    prediction = model.predict(input_data)[0]
    
    return {"predicted_units_sold": prediction}

