const express = require("express");
const app = express();


const port = process.env.PORT || 5000;

app.listen(port,() => console(`server running om port ${port} ❤️❤️`));