const express = require("express");
const detect = require("detect-port");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

// Example users
const users = [
  { email: "user@example.com", password: "1234" }
];

// Login endpoint
app.post("/api/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find(u => u.email === email && u.password === password);
  if (user) res.json({ success: true });
  else res.json({ success: false });
});

// Dashboard endpoint
app.get("/api/dashboard", (req, res) => {
  res.json({ message: "Welcome to your dashboard!", date: new Date() });
});

// Detect free port and start server
const DEFAULT_PORT = 8080;

detect(DEFAULT_PORT).then((port) => {
  app.listen(port, () => {
    console.log(`Backend running on http://localhost:${port}`);
    // Update frontend .env
    fs.writeFileSync(
      "../frontend/react-app/.env",
      `REACT_APP_API_URL=http://localhost:${port}\nPORT=8080`
    );
  });
});
