const validateSession = require("../middleware/validate-session");
const profile = require("../models/profile");
const router = require("express").Router();
const Profile = require("../db").import("../models/profile");

/********PROFILE CREATED***********/

router.post("/new", validateSession, (req, res) => {
  Profile.create({
    first_name: req.body.profile.first_name,
    last_name: req.body.profile.last_name,
    email: req.user.email,
    address_1: req.body.profile.address_1,
    address_2: req.body.profile.address_2,
    city: req.body.profile.city,
    state: req.body.profile.state,
    zipcode: req.body.profile.zipcode,
    phone_number: req.body.profile.phone_number,
    user_id: req.user.id
  })
    .then(function profileSuccess(profile) {
      res.json({
        profile: profile,
        message: "Profile created!",
      });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

router.get("/:id", validateSession, (req, res) => {
  let id = req.params.id;
  let userId = req.user.id;
  Profile.findAll({
      where: { user_id: userId, id: id }
  })
    .then((profile) => res.status(200).json(profile))
    .catch((err) => res.status(500).json({ error: err }));
});

/*****UPDATE PROFILE******/

router.put("/:id", validateSession, function(req, res){
  const updateProfile = {
    first_name: req.body.profile.first_name,
    last_name: req.body.profile.last_name,
    email: req.user.email,
    address_1: req.body.profile.address_1,
    address_2: req.body.profile.address_2,
    city: req.body.profile.city,
    state: req.body.profile.state,
    zipcode: req.body.profile.zipcode,
    phone_number: req.body.profile.phone_number,
  };

  const query = { 
    where: { 
      id: req.params.id, 
      user_id: req.user.id
    }
  };

 Profile.update(updateProfile, query)
  .then(profile => res.status(200).json(profile))
  .catch(err => res.status(500).json({error:err}))
});

module.exports = router;
