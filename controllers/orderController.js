const validateSession = require("../middleware/validate-session");
const { Order } = require("../models");
const { Router } = require("express");
const router = Router();

/********ORDER CREATED***********/

router.post("/create", validateSession, (req, res) => {
  Order.create({
    item_description: req.body.order.item_description ,
    unit_type: req.body.order.unit_type ,
    quantity_ordered: req.body.order.quantity_ordered ,
    unit_cost: req.body.order.unit_cost ,
    order_total: req.body.order.order_total ,
    status: req.body.order.status,
    userId: req.user.id,
  })
    .then(function orderSuccess(order) {
      res.json({
        order: order,
        message: "Order created!",
      });
    })
    .catch((err) => res.status(500).json({ error: err }));
});

/********VIEW SINGLE ORDER***********/

router.get("/:id", validateSession, (req, res) => {
  let id = req.params.id;
  let userId = req.user.id;
  Order.findAll({
      where: { userId: userId, id: id }
  })
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(500).json({ error: err }));
});

/********VIEW ALL ORDER BY USER***********/

router.get("/", validateSession, (req, res) => {
  let userId = req.user.id;
  Order.findAll({
    where: { user_id: userId },
  })
    .then((order) => res.status(200).json(order))
    .catch((err) => res.status(500).json({ error: err }));
});

/*****UPDATE ORDER******/

router.put("/:id", validateSession, (req, res) => {
  const updateEntry = {
    item_description: req.body.order.item_description ,
    unit_type: req.body.order.unit_type ,
    quantity_ordered: req.body.order.quantity_ordered ,
    unit_cost: req.body.order.unit_cost ,
    order_total: req.body.order.order_total ,
    status: req.body.order.status,
  };

  const query = { where: { id: req.params.id, userId: req.user.id} };

 Order.update(updateEntry, query)
  .then(order => res.status(200).json(order))
  .catch(err => res.status(500).json({error:err}))
});

/*****DELETE ORDER******/

router.delete("/:id", validateSession, (req, res) => {
  const query = { 
    where: {
      id: req.params.id, 
      userId: req.user.id
    }
  };

  Order.destroy(query)
  .then(() => res.status(200).json({message: "Your Order Has Been Cancelled."}))
  .catch(err => res.status(500).json({error:err}))
});


module.exports = router;
