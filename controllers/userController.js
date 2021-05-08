const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { User } = require("../models");
const { Router } = require("express");
const router = Router();

/********USER CREATED***********/

router.post("/create", (req, res) => {
  User.create({
    email: req.body.user.email,
    password: bcrypt.hashSync(req.body.user.password),
    role: "default"
  })
    .then(function userSuccess(user) {
      let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        expiresIn: 60 * 60 * 24,
      });
      res.json({
        user: user,
        message: "New user created!",
        sessionToken: token

      });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

/********LOGIN CREATED***********/

router.post("/login", (req, res) => {
  User.findOne({
    where: {
      email: req.body.user.email,
    },
    include: 'profile',
  })
    .then(function userFound(user) {
      if (user) {
        bcrypt.compare(
          req.body.user.password,
          user.password,
          function (err, matches) {
            if (matches) {
              let token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
                expiresIn: 60 * 60 * 24,
              });
              res.status(200).json({
                user: user,
                message: "User login success!",
                sessionToken: token,
              },
         
              );
            } else {
              res.status(502).send({ error: "Login Failed" });
            }
          }
        );
      } else {
        res.status(500).json({ error: "User does not exist." });
      }
    })
    .catch((err) => res.status(500).json({ error: err }));
});



module.exports = router;
