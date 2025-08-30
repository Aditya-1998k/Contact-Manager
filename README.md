# Contact-Manager

A full-stack web application to manage personal contacts, featuring user accounts and contact importing.

---

##  Features

- **User Authentication**: Sign up, log in, and log out securely.
- **Contact Management**:
  - Import contacts via CSV file.
  - Delete contacts as needed.
- Built with a clean front-end and a scalable back-end.

---

##  Tech Stack

| Layer         | Technologies                           |
|---------------|----------------------------------------|
| **Client**    | React, Bootstrap 5, JavaScript, HTML, CSS |
| **Server**    | Node.js, Express                        |
| **Database**  | MongoDB                                 |

---

##  Project Structure
```
Contact-Manager/
├── client/       # React frontend
├── server/       # Node.js + Express backend
├── README.md     # Project documentation
```
---

##  Getting Started

###  Prerequisites

- Node.js and npm installed
- MongoDB instance (locally or via a service like MongoDB Atlas)

###  Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Aditya-1998k/Contact-Manager.git
   cd Contact-Manager
   ```
2.	Backend setup:
```
cd server
npm install
# Configure MongoDB connection in your .env (e.g., DATABASE_URL)
npm start
```
Backend runs by default at: http://localhost:5000

3.	Frontend setup:
```
cd client
npm install
npm start
```

Frontend runs by default at: http://localhost:3000

#### Usage

	1.	Access the app at http://localhost:3000
	2.	Register or log in to your account.
	3.	Navigate to the contact management section to:
	•	Import contacts from CSV.
	•	View, search, or delete contacts.

 
