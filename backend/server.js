const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Backend Running Successfully");
});

app.get("/api/message", (req, res) => {
    res.json({
        success: true,
        message: "Hello from Express Backend!"
    });
});

app.post("/api/data", (req, res) => {
    const { name } = req.body;

    res.json({
        received: name
    });
});

const PORT =5000;

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});