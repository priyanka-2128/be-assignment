const users = require("../data/users");
const bcrypt = require("bcryptjs");

// SIGNUP API
async function signup(req, res) {

    const {
        name, email, password, username,
        gender, mobile, building,
        lane1, lane2, landmark, pincode
    } = req.body;

    const existingUser = users.find(
        user => user.email === email
    );

    if (existingUser) {
        return res.send("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = {
        name,
        email,
        password: hashedPassword,
        username,
        gender,
        mobile,
        address: {
            building,
            lane1,
            lane2,
            landmark,
            pincode
        }
    };

    users.push(newUser);

    res.send("Signup successful! You can now login.");
}


// LOGIN API
async function login(req, res) {

    const { email, password } = req.body;

    const user = users.find(
        user => user.email === email
    );

    if (!user) {
        return res.send("User not found");
    }

    const match = await bcrypt.compare(
        password,
        user.password
    );

    if (!match) {
        return res.send("Incorrect password");
    }

    res.send("Login successful! Welcome " + user.name);
}

module.exports = { signup, login };