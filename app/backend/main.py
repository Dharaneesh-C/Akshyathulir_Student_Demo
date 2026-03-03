from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes import courses, trainers, placements, startups, certificates,dashboard

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Include all routers
app.include_router(courses.router, prefix="/api")
app.include_router(trainers.router, prefix="/api")
app.include_router(placements.router, prefix="/api")
app.include_router(startups.router, prefix="/api")
app.include_router(certificates.router, prefix="/api")
app.include_router(dashboard.router,prefix="/api/dashboard")