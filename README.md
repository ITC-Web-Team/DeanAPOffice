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
  
