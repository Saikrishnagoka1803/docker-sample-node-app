import express from "express";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Hello from the Express server!",
    method: "GET",
  });
});

app.post("/submit", (req, res) => {
  const { name, message } = req.body || {};

  res.status(201).json({
    message: "Data received successfully",
    received: {
      name: name || "Anonymous",
      message: message || "No message provided",
    },
    method: "POST",
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
