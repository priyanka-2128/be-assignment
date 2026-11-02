
function checkLogin(req, res, next) {

    if (!req.session.userEmail) {
        return res.status(401).send("Please login first");
    }

    next();
}

module.exports = checkLogin;
