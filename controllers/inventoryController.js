const validateSession = require("../middleware/validate-session");
const { Inventory } = require("../models/inventory");
const { Router } = require("express");
const router = Router();

/********INVENTORY CREATED***********/

router.post("/add", validateSession, (req, res) => {
  Inventory.create({
    item_number: req.body.inventory.item_number ,
    item_description: req.body.inventory.item_description ,
    unit_type: req.body.inventory.unit_type ,
    quantity_update: req.body.inventory.quantity_update,
    quantity_available: req.body.inventory.quantity_available ,
    unit_cost: req.body.inventory.unit_cost,
    user_id: req.user.id,
  })
    .then(function inventoryAddSuccess(inventory) {
      res.json({
        inventory: inventory,
        message: "New Inventory Item Added!",
      });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

/********VIEW SINGLE ITEM***********/

router.get("/:id", validateSession, (req, res) => {
  let id = req.params.id;
  Inventory.findAll({
      where: {id: id}
  })
    .then((inventory) => res.status(200).json(inventory))
    .catch((err) => res.status(500).json({ error: err }));
});

/********VIEW ALL INVENTORY***********/

router.get("/", validateSession, (req, res) => {
  Inventory.findAll()
    .then((inventory) => res.status(200).json(inventory))
    .catch((err) => res.status(500).json({ error: err }));
});

/*****UPDATE ITEM******/

router.put("/:id", validateSession, function(req, res){
  const updateItem = {
    item_number: req.body.inventory.item_number ,
    item_description: req.body.inventory.item_description ,
    unit_type: req.body.inventory.unit_type ,
    quantity_update: req.body.inventory.quantity_update,
    quantity_available: req.body.inventory.quantity_available ,
    unit_cost: req.body.inventory.unit_cost,
  };

  const query = { where: { id: req.params.id, user_id: req.user.id} };

 Inventory.update(updateItem, query)
  .then(inventory => res.status(200).json(inventory))
  .catch(err => res.status(500).json({error:err}))
});

/*****DELETE ITEM******/

router.delete("/:id", validateSession, function (req, res){
  const query = {
    where: { 
      id: req.params.id,
      user_id: req.user.id
    }
  };

  Inventory.destroy(query)
  .then(() => res.status(200).json({message: "Item Deleted!"}))
  .catch(err => res.status(500).json({error:err}))
});

module.exports = router;
