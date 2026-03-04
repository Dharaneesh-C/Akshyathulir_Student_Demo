from fastapi import APIRouter
from controllers.dashboard_controller import (
    save_dashboard_data_controller,
    get_dashboard_kpi_dashboard_controller,
    get_growth_trend_controller,
    get_revenue_trend_controller,
    get_PerformanceSummary_controller,
    get_StageDistribution_controller
)

router = APIRouter(prefix="/dashboard", tags=["Dashboard"])


# ---------------- GET DEFAULT DASHBOARD ----------------
@router.get("/")
def get_dashboard():
    return {
        "today": {"users": 0, "courses": 0, "placements": 0, "trainers": 0},
        "week": {"users": 0, "courses": 0, "placements": 0, "trainers": 0},
        "month": {"users": 0, "courses": 0, "placements": 0, "trainers": 0},
        "sixMonths": {"users": 0, "courses": 0, "placements": 0, "trainers": 0},
        "enrollment": [120, 210, 180, 240, 300, 250, 280, 350, 380, 420, 450, 500],
        "placementStatus": {"placed": 650, "progress": 280, "notPlaced": 120}
    }


# ---------------- INSERT / UPDATE DASHBOARD ----------------
@router.post("/save/{email}")
def save_dashboard(email: str, data: dict):
    return save_dashboard_data_controller(email, data)


# ---------------- GET SUMMARY ----------------
@router.get("/kpi_dashboard/{email}")
def get_kpi_dashboard(email: str):
    return get_dashboard_kpi_dashboard_controller(email)


# ---------------- GET GROWTH ----------------
@router.get("/growth/{email}")
def get_growth(email: str):
    return get_growth_trend_controller(email)


# ---------------- GET REVENUE ----------------
@router.get("/revenue/{email}")
def get_revenue(email: str):
    return get_revenue_trend_controller(email)


# ---------------- GET STARTUPS ----------------
@router.get("/PerformanceSummary/{email}")
def get_PerformanceSummary(email: str):
    return get_PerformanceSummary_controller(email)


# ---------------- GET CERT DISTRIBUTION ----------------
@router.get("/StageDistribution/{email}")
def get_StageDistribution(email: str):
    return get_StageDistribution_controller(email)
