function signupValidation(req, res, next) {
    const {
        name, email, password, confirmPassword,
        username, gender, mobile,
        building, lane1, lane2, pincode
    } = req.body;

    if (!name || !email || !password || !confirmPassword ||
        !username || !gender || !mobile ||
        !building || !lane1 || !lane2 || !pincode) {
        return res.send("Please fill all required fields");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.send("Invalid email address");
    }

    if (password.length < 6) {
        return res.send("Password must contain at least 6 characters");
    }

    if (password !== confirmPassword) {
        return res.send("Passwords do not match");
    }

    if (!/^[0-9]{10}$/.test(mobile)) {
        return res.send("Enter valid 10 digit mobile number");
    }

    if (!/^[0-9]{6}$/.test(pincode)) {
        return res.send("Enter valid 6 digit pincode");
    }

    next();
}

function loginValidation(req, res, next) {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.send("Email and password are required");
    }

    next();
}

module.exports = { signupValidation, loginValidation };