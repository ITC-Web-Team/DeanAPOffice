@echo off
echo =================================
echo    Dean AP Office - Quick Start
echo =================================
echo.
echo Starting both Backend and Frontend...
echo.

echo [1/2] Starting Django Backend...
start "Django Backend" cmd /k "cd backend && python manage.py runserver"

echo [2/2] Starting React Frontend...
timeout /t 3 /nobreak > nul
start "React Frontend" cmd /k "cd frontend &&  npm start"

echo.
echo ✓ Both servers are starting!
echo Frontend: http://localhost:3000
echo Backend:  http://localhost:8000
echo.
echo Press any key to close this window...
pause > nul
echo.
echo Press any key to close this window...
pause > nul
