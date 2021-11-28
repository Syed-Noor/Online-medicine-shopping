const express = require("express");
//  const {protect}=require('../Middleware/authMiddleware')
const router = express.Router();
const {
  addOrderItem,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
} = require("../controllers/orderController");

//create new order
router.route("/").post(addOrderItem);



//For get user order
router.route("/myorders").post(getMyOrders);

//Get products by id
router.route("/:id").get(getOrderById);

//update order
router.route("/:id/pay").put(updateOrderToPaid);
module.exports = router;
