# 🌐 DeanAPOffice
This project is an application management system for the Dean AP Office, IIT Bombay.
## 📌 Important Terms
- **Inward:** A pending application or document
- **Outward:** A reviewed application, requires no further deliberation
## 🔗 Components of an Application
- A unique system-generated `id`
- The applicant's `roll_number`
- The `date` of submission of the application
- `name` of the applicant
- `department` of the applicant
- `subject` of the application
- `remarks`, if any, on the application
- `application_document` : a key for whether it's an application or a document
- `state` : '0' indicates **Inward** and '1' indicates **Outward**

## ⚙️ Functionality
- An admin panel for directly managing applications
- Display list of 'inward' applications
- Display list of 'outward' applications
- Retrieve the data of an existing application
- Create a new application
- Convert an 'inward' application to an 'outward' application after review and editing
- Updating an existing application
  
# Commands:
- python manage.py makemigrations
- python manage.py migrate       
- python manage.py runserver   
- python manage.py createsuperuser

## 🚀 Quick Start (Local Development)

### First Time Setup:
1. **Double-click `initial-setup.bat`** - Run this ONCE to install everything
2. Wait for setup to complete

### Daily Use (After Setup):
**Just double-click `start-all.bat`** - Starts both servers instantly!

### Alternative Run Options:
- **PowerShell**: Right-click `quick-start.ps1` → Run with PowerShell  
- **Separate**: Use `start-backend.bat` and `start-frontend.bat` individually

### Access Points:
- **Main Application**: http://localhost:3000
- **API Endpoints**: http://localhost:8000
- **Admin Panel**: http://localhost:8000/admin

### For Network Access:
- Find your IP: `ipconfig` 
- Others can access: `http://YOUR_IP:3000`  