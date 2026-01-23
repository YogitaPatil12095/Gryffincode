const express = require("express");
const app = express();

// No security middleware
// No input validation
// No rate limiting

app.get("/", (req, res) => {
  res.send("Hello from a vulnerable Node.js app!");
});

// Example of unsafe user input usage
app.get("/user", (req, res) => {
  const name = req.query.name;
  res.send("Hello " + name); // XSS risk
});

app.listen(3000, () => {
  console.log("Vulnerable app running on port 3000");
});
