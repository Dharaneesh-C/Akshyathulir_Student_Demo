from fastapi import FastAPI
from routes import router
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"], 
    allow_methods=["*"],
    allow_headers=["*"],
)
# dd
app.include_router(router, prefix="/api", tags=["Project API"])


