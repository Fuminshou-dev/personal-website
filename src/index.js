const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

app.post("/api/issues", async (req, res) => {
  try {
    const response = await axios.post(
      "https://api.tracker.yandex.net/v2/issues/",
      {
        headers: {
          Accept: "application/json",
          "X-Cloud-Org-ID": "bpf4so6pdorpcp1lke3v",
          Authorization:
            "OAuth y0_AgAAAAAMh0ccAAz8bQAAAAEc4BObAADQYl_YNNZBq5SW6biMXYzNKgchRA",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(req.body),
      }
    );

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).send("Internal Server Error");
  }
});

app.listen(port, () => {
  console.log(`Proxy server running at https://localhost:${port}`);
});
