const validateSession = require("../middleware/validate-session");
const { Chick } = require("../models");
const { Router } = require("express");
const router = Router();

/********CHICK CREATED***********/

router.post("/hatched", validateSession,(req, res) => {
  Chick.create({
    chick_name: req.body.chick.chick_name,
    chick_type: req.body.chick.chick_type,
    chick_production: req.body.chick.chick_production,
    chick_persona: req.body.chick.chick_persona,
    user_id: req.user.id
  })
    .then(function chickAddSuccess(chick) {
      res.json({
        chick: chick,
        message: "New Chick Added!",
      });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

/********VIEW SINGLE CHICK***********/

router.get("/:id", validateSession, (req, res) => {
  let id = req.params.id;
  Chick.findAll({
      where: {id: id}
  })
    .then((chick) => res.status(200).json(chick))
    .catch((err) => res.status(500).json({ error: err }));
});

/********VIEW ALL CHICKS***********/

router.get("/", validateSession, (req, res) => {
  Chick.findAll()
    .then((chick) => res.status(200).json(chick))
    .catch((err) => res.status(500).json({ error: err }));
});

/*****UPDATE CHICK******/

router.put("/:id", validateSession, function(req, res){
  const updateChick = {
    chick_name: req.body.chick.chick_name,
    chick_type: req.body.chick.chick_type,
    chick_production: req.body.chick.chick_production,
    chick_persona: req.body.chick.chick_persona,
    photo: req.body.chick.photo,
  };

  const query = { 
    where: { 
      id: req.params.id
    }
  };

 Chick.update(updateChick, query)
  .then(chick => res.status(200).json(chick))
  .catch(err => res.status(500).json({error:err}))
});

/*****DELETE CHICK******/

router.delete("/:id", validateSession, function (req, res){
  const query = {
    where: { 
      id: req.params.id,
    }
  };

  Chick.destroy(query)
  .then(() => res.status(200).json({message: "Chick Deleted!"}))
  .catch(err => res.status(500).json({error:err}))
});

module.exports = router;
