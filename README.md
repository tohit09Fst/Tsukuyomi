## 🏡 DreamNexus


A modern and fully responsive **Real Estate Platform** built using the **MERN stack (MongoDB, Express, React, Node.js)**. This platform allows users to browse, list, and manage properties effortlessly.

---

## 🚀 Features

✅ **User Authentication** (Sign up, Login, Logout)   
✅ **Advanced Property Search & Filters**  
✅ **Google Maps & Location Integration**  
✅ **Image Uploads for Properties** 
✅ **Favorite & Wishlist for Properties**  
✅ **Messaging System Between Buyers & Sellers**  

---

## 🛠 Tech Stack

| **Technology**  | **Purpose**  |
|---------------|------------------|
| **MongoDB** | Database for storing property listings & user data |
| **Express.js** | Backend framework for handling API requests |
| **React.js** | Frontend library for a dynamic UI |
| **Node.js** | Server-side runtime for handling business logic |
| **Redux Toolkit** | State management for React |
| **Mongoose** | MongoDB ORM for database operations |
| **Cloudinary** | Image upload & storage for property images |
| **Firebase** | User authentication & push notifications |
| **Stripe** | Payment processing for premium listings |
| **React Router** | Navigation between pages |
| **Axios** | HTTP requests from frontend to backend |
| **Tailwind CSS** | UI styling for a modern look |

---

## 📂 Folder Structure

### **Frontend (React) - `/client`**
```
client/
│── public/               # Static assets (favicon, images)
│── src/
│   ├── assets/           # Images & icons
│   ├── components/       # Reusable UI components (Navbar, Footer, etc.)
│   ├── pages/            # Page components (Home, Listings, PropertyDetails)
│   ├── redux/            # Redux Toolkit (slices & store)
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Helper functions
│   ├── services/         # API calls (Axios)
│   ├── App.js            # Main app component
│   ├── index.js          # Entry point for React
│   └── styles/           # TailwindCSS global styles
│── .env                  # Environment variables
│── package.json          # Dependencies & scripts
└── README.md             # Project documentation
```

### **Backend (Node.js + Express) - `/server`**
```
server/
│── config/               # Configuration files (DB, Auth)
│── controllers/          # Business logic for routes
│── models/               # Mongoose schemas for MongoDB
│── routes/               # Express route handlers
│── middlewares/          # Middleware (Auth, Validation, etc.)
│── utils/                # Helper functions (JWT, email, etc.)
│── uploads/              # Image uploads (if not using Cloudinary)
│── .env                  # Environment variables
│── server.js             # Entry point for Express
│── package.json          # Dependencies & scripts
└── README.md             # API documentation
```

---

## 🛠 How to Run the Project

### **1️⃣ Clone the Repository**
```sh
git clone https://github.com/yourusername/real-estate-platform.git
cd real-estate-platform
```

### **2️⃣ Install Dependencies**
#### Frontend:
```sh
cd client
npm install
```
#### Backend:
```sh
cd server
npm install
```

### **3️⃣ Setup Environment Variables**
Create a `.env` file in the `/server` folder with the following variables:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### **4️⃣ Start the Development Servers**
#### Backend:
```sh
cd server
npm run dev
```
#### Frontend:
```sh
cd client
npm start
```

---

## 📌 API Endpoints (Backend)

| Method | Route                   | Description                     | Auth Required |
|--------|--------------------------|---------------------------------|--------------|
| `POST` | `/api/auth/register`     | Register a new user              | ✅ |
| `POST` | `/api/auth/logout`       | User logout                      | ✅ |
| `GET`  | `/api/notification`      | Get all noticication of chat     | ✅ |
| `POST` | `/api/profilePosts`      | Create a new property listing    | ✅ |
| `PUT`  | `/api/posts/:id`         | Update post                      | ✅ |

---

## 🔥 Key Packages Used

### **Frontend (React)**
- **React Router** → For navigation
- **Axios** → API requests
- **Tailwind CSS** → Styling
- **React Icons** → Icons for UI

### **Backend (Node.js & Express)**
- **Mongoose** → MongoDB ORM
- **JWT (jsonwebtoken)** → Authentication
- **Bcrypt.js** → Password hashing
- **Multer** → File uploads
- **Express Validator** → Input validation
- **Prisma** → used for database querying and migrations.

---

## 🎨 UI Screenshots

### **🏠 Home Page**
![Home Page](https://via.placeholder.com/800x400?text=Home+Page)

### **🔍 Post Listings**
![Property Listings](https://via.placeholder.com/800x400?text=Property+Listings)

### **📜 Post Details**
![Property Details](https://via.placeholder.com/800x400?text=Property+Details)


---

## 📢 Contributing
Want to contribute? Follow these steps:
1. **Fork the repository**  
2. **Create a new branch** (`feature/new-feature`)  
3. **Commit your changes**  
4. **Push to GitHub and submit a PR!**  

---

## 🛡 Security & Best Practices

✔ Validate user inputs using **Express Validator**  
✔ Secure passwords with **bcrypt.js**  
✔ Use **JWT Authentication** for secure API access  
✔ Implement **CORS** for cross-origin access  

---

## 📄 License
This project is **open-source** and available under the **MIT License**.

---

## 🌟 Show Some Love!  
If you like this project, don’t forget to ⭐️ **star the repo** and **share it**!
