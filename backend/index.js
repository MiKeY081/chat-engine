const express = require("express");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

const axios = require("axios");

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;
  // Get or create user on Chat Engine!
  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      { username: username, secret: username, first_name: username },
      { headers: { "Private-Key": "54ef185f-3842-40ae-b48a-caf15988a8f2" } }
    );
    return res.status(r.status).json(r.data);
  } catch (e) {
    return;
    res.status(e.response.status).json(e.response.data);
  }
});

app.listen(3001);
