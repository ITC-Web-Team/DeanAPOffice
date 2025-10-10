# Network Access Setup Guide

This guide explains how to access the Dean AP Office application from other devices on the same WiFi network.

## Server PC's Network IP Address
**192.168.0.149** (WiFi adapter)

## Setup Instructions

### 1. Start the Backend Server (on the server PC)

Open a terminal/PowerShell window and run:

```powershell
cd "e:\ITC\dean ap\DeanAPOffice\backend"
python manage.py runserver 0.0.0.0:8000
```

**Important:** Use `0.0.0.0:8000` instead of just `runserver` to make it accessible from other devices on the network.

The backend will be accessible at:
- From server PC: `http://localhost:8000` or `http://192.168.0.149:8000`
- From other devices: `http://192.168.0.149:8000`

### 2. Start the Frontend Server (on the server PC)

Open another terminal/PowerShell window and run:

```powershell
cd "e:\ITC\dean ap\DeanAPOffice\frontend"
$env:HOST='0.0.0.0'; npm start
```

**Important:** Set `HOST='0.0.0.0'` to make the frontend accessible from other devices.

The frontend will be accessible at:
- From server PC: `http://localhost:3000` or `http://192.168.0.149:3000`
- From other devices: `http://192.168.0.149:3000`

### 3. Access from Other Devices

On any device connected to the same WiFi network (192.168.0.x):

1. Open a web browser
2. Go to: `http://192.168.0.149:3000`
3. You should see the Dean AP Office application with all the data!

## Troubleshooting

### Backend not accessible from other devices?
- Make sure you started the backend with `0.0.0.0:8000`
- Check Windows Firewall - you may need to allow port 8000
- Run this command to check if the server is listening:
  ```powershell
  netstat -an | Select-String "8000"
  ```

### Frontend not accessible from other devices?
- Make sure you set `HOST='0.0.0.0'` before running npm start
- Check Windows Firewall - you may need to allow port 3000
- Run this command to check if the server is listening:
  ```powershell
  netstat -an | Select-String "3000"
  ```

### Allow through Windows Firewall (if needed)

If other devices can't connect, you may need to allow the ports through Windows Firewall:

```powershell
# Allow port 8000 (backend)
New-NetFirewallRule -DisplayName "Django Backend" -Direction Inbound -LocalPort 8000 -Protocol TCP -Action Allow

# Allow port 3000 (frontend)
New-NetFirewallRule -DisplayName "React Frontend" -Direction Inbound -LocalPort 3000 -Protocol TCP -Action Allow
```

## Switching Back to Local-Only Development

If you want to work locally on just this PC again:

1. **Frontend:** Change `ip` in `frontend/src/ip.js` back to `'localhost'`
2. **Backend:** Start with `python manage.py runserver` (without 0.0.0.0)
3. **Frontend:** Start with `npm start` (without setting HOST)

## Notes

- Both devices MUST be on the same WiFi network (192.168.0.x subnet)
- The server PC has IP: **192.168.0.149** (from Wi-Fi adapter)
- If the server PC's IP address changes (happens when you reconnect to WiFi), you'll need to:
  1. On server PC, find the new IP: `ipconfig` (look at Wi-Fi adapter IPv4 Address)
  2. Update `frontend/src/ip.js` with the new IP
  3. Update `backend/core/settings.py` ALLOWED_HOSTS and CORS_ALLOWED_ORIGINS
- This setup is for development/testing only, not for production use
