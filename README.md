React Free Tier App

A simple React application demonstrating basic navigation between Login, Home, and Dashboard pages. This project is ideal for beginners who want to understand React component structure and how to run a React app using a local development environment.

🚀 Features

Separate components: Home, Dashboard, Login

Clean folder structure

Basic routing setup

Simple UI to demonstrate page navigation

Runs on lightweight local development server

📁 Project Structure

project-folder/
├── public/
│   ├── index.html
├── src/
│   ├── home.js
│   ├── dashboard.js
│   ├── login.js
│   ├── index.js
│   ├── App.js
├── package.json

⚙️ Technologies Used

React JS

JavaScript (ES6)

HTML

CSS

🛠️ Installation & Running the Project

Follow these steps to run the app on your local machine:

1️⃣ Install Node.js

Download & install Node.js:
https://nodejs.org/

Verify installation:

node -v
npm -v

2️⃣ Install project dependencies

Open terminal inside the project folder and run:

npm install

3️⃣ Start the development server
npm start

📌 Available Scripts
Command	Description
npm start	Runs the app in development mode
npm run build	Creates production build
🧩 How Routing Works

The App.js file controls page navigation.
Example:

<Route path="/" element={<Login />} />
<Route path="/home" element={<Home />} />
<Route path="/dashboard" element={<Dashboard />} />

🧑‍💻 Author

Harsha M
GitHub: https://github.com/Harshaharika7
