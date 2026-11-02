
const express = require("express");
const session = require("express-session");

const app = express();


app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret: "my-secret-key",
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        maxAge: 30 * 60 * 1000
    }
}));


app.use(express.static("public"));


const authRoutes = require("./routes/authRoutes");
const profileRoutes = require("./routes/profileRoutes");

app.use("/api", authRoutes);
app.use("/api", profileRoutes);


app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

