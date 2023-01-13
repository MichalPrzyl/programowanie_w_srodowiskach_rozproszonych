const app = require("express")();

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("hello lol");
});

app.listen(PORT, () => {
    console.log(`Working on ${PORT}`);
});