# Project Setup Guide

This guide will walk you through setting up and running the project with three separate components: **Frontend**, **Backend**, and **ML Model**. Each component has its own dependencies and setup instructions.

## Prerequisites

Before starting, ensure you have the following installed:

- [Node.js](https://nodejs.org/en/) (for Frontend and Backend)
- [Python 3.x](https://www.python.org/downloads/) (for ML Model)
- [pip](https://pip.pypa.io/en/stable/) (for Python dependencies)

## Folder Structure

The project is organized into three main folders:

- **FRONTEND**: Contains the React.js application.
- **BACKEND**: Contains the Express.js API server.
- **ML-MODEL**: Contains the FastAPI application and machine learning model.

## Setup Instructions

### 1. **Frontend Setup**

Navigate to the **FRONTEND** folder and install the necessary dependencies.

```bash
cd FRONTEND
npm install

```
Once the dependencies are installed, you can start the React development server.
```
npm run dev

```
The frontend will be available at http://localhost:5173.

### 2. **Backend Setup**
Navigate to the BACKEND folder and install the required dependencies.
```
cd BACKEND
npm install

```
Once the dependencies are installed, you can start the backend server.
```
npm run dev

```
The backend will be available at http://localhost:8000.
### **3. ML Model Setup**
```
cd ML-MODEL 
pip install numpy pandas scikit-learn pickle fastapi uvicorn
```

```
uvicorn api:app --reload

```
then creating the model.plk
```
python train_model.py
```
on running this it genrerates a model.pkl file 

### Running the Project  
```
Frontend: Run npm run dev in the FRONTEND folder.

Backend: Run npm run dev in the BACKEND folder.

ML Model: Run uvicorn api:app --reload in the ML-MODEL folder.
```

### Troubleshooting
```
If you encounter issues with missing dependencies, try running the npm install or pip install commands again in the respective folders.

Make sure that the ports are not being used by other applications. If necessary, you can change the port numbers in the configuration files.
```

### Conclusion

Now you are ready to use the project! The frontend, backend, and ML model should be running on separate servers, and they will communicate as needed. Happy coding!
