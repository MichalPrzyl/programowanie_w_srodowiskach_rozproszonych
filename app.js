// const app = require("express")();

const PORT = process.env.PORT || 3000;


let express = require("express");
let app = express();

app.use(express.static('public'))

app.get("/", (req, res) => {
    // res.send("hello lol");
    res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => {
    console.log(`Working on ${PORT}`);
});