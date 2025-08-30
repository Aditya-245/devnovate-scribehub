📝 Devnovate Blogging & Article Platform

A **MERN stack blogging platform** where users can write and submit blogs for admin approval.  
Admins manage content quality by approving, rejecting, hiding, or deleting blogs.  
The platform also features **Trending Blogs**, search & filters, and a **responsive UI**.  

---

## 🚀 Features

### 👤 User Side
- Signup/Login with **JWT authentication** 🔒
- Create and submit blogs (pending until admin approval)
- Personal dashboard to manage submitted & published blogs
- Responsive UI for mobile and desktop
- Like & comment on blogs
- Search and filter blogs
- Trending Blogs section (based on likes/comments)

### 👨‍💼 Admin Side
- Admin dashboard for blog moderation
- Approve or reject blog submissions
- Hide or delete published blogs
- View analytics (bonus)

### 🎁 Bonus Features
- Markdown editor for blog writing ✍️
- Email notifications for submission status and interactions 📩
- Analytics dashboard (views, likes, comments) 📊

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS  
- **Backend:** Node.js, Express.js  
- **Database:** MongoDB  
- **Authentication:** JWT (JSON Web Token)  
- **Optional Tools:** Nodemailer (emails), Chart.js/Recharts (analytics), Cloudinary/AWS S3 (images)

---

## 📂 Project Structure

devnovate-blog-platform/
│── backend/ # Express.js + MongoDB (API, Auth, Blog CRUD, Admin controls)
│── frontend/ # React.js (UI, components, pages)
│── .env # Environment variables
│── package.json
│── README.md

yaml
Copy code

---

## ⚙️ Installation & Setup

### 1. Clone the Repo
```bash
git clone https://github.com/your-username/devnovate-blog-platform.git
cd devnovate-blog-platform
2. Backend Setup
bash
Copy code
cd backend
npm install
Create a .env file in /backend with:

ini
Copy code
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
Run the server:

bash
Copy code
npm start
3. Frontend Setup
bash
Copy code
cd frontend
npm install
npm start
Frontend will run on http://localhost:3000
Backend will run on http://localhost:5000

📸 Screens (Suggested Pages)
Homepage → Latest + Trending blogs

Signup/Login → User authentication

User Dashboard → My blogs, Create blog (Markdown editor)

Admin Dashboard → Approve/Reject/Hide/Delete blogs

Blog Detail Page → Full blog, likes, comments

🚧 Roadmap
 User authentication (JWT)

 Blog submission system

 Admin moderation

 Homepage + Trending blogs

 Markdown editor

 Email notifications

 Analytics dashboard

🤝 Contributing
Contributions are welcome!

Fork the repo

Create a new branch (git checkout -b feature-xyz)

Commit changes (git commit -m "Add feature xyz")

Push to branch (git push origin feature-xyz)

Open a Pull Request

📜 License
This project is licensed under the MIT License – feel free to use and modify it.

👨‍💻 Author
Developed by Devnovate Team ✨

yaml
Copy code

---

⚡ Pro tip: Add **screenshots of your app (homepage, dashboard, blog page)** in a `screenshots/` folder and show them inside the README using:  
```markdown
![Homepage](screenshots/homepage.png)
