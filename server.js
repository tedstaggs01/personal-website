const express = require("express")
const app = express()

app.set("view-engine", "ejs")

app.get("/", (req, res) => {
    res.render("calendar.ejs", {name: "Ted"})
})

app.get("/login", (req,res) => {
    res.render("login.ejs")
})

app.get("/register", (req, res) => {
    res.render("register.ejs")
})

app.listen(3000)