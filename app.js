const express = require("express");
const routes = require('./routes');
const app = express();
app.use(express.json());
const PORT = 3000;
app.get("/", (req, res) => {
    res.send("Hello World!");
});
app.use('/api/v1/user', routes.user);
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});