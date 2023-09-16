import express from "express";
import axios from "axios";

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/myip', async (req, res) => {
  try {
    const response = await axios.get('https://httpbin.org/ip');
    const ipAddress = response.data.origin;
    res.json({ ipAddress });
  } catch (error) {
    res.status(500).json({ error: 'Error fetching IP address' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});