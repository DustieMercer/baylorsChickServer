const validateAdmin = (req, res, next) => {
    if (req.user.role === 'admin') {
        return next();
    } else {
        return res.status(500).send("You can keep on knocking but you can't come in!")
    }
}
module.exports = validateAdmin;