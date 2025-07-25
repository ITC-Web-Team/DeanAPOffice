@echo off
echo =====================================
echo    Dean AP Office - Initial Setup
echo =====================================
echo.
echo This is a ONE-TIME setup. After this, just use start-all.bat
echo.

echo [1/4] Setting up Python virtual environment...
cd backend
if not exist "env" (
    echo Creating virtual environment...
    python -m venv env
)
call env\Scripts\activate.bat
echo Installing Python dependencies...
pip install -r requirements.txt

echo [2/4] Setting up database...
python manage.py migrate

echo [3/4] Setting up Node.js dependencies...
cd ..\frontend
echo Installing npm dependencies...
npm install

echo [4/4] Setup complete!
echo.
echo ===================================
echo        Setup Complete! ✓
echo ===================================
echo.
echo Now you can use these commands:
echo • Double-click "start-all.bat" to run both servers
echo • Double-click "start-backend.bat" for backend only  
echo • Double-click "start-frontend.bat" for frontend only
echo.
echo Press any key to exit...
pause > nul
