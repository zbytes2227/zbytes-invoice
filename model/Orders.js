const mongoose = require("mongoose");
// mongoose.set('strictQuery', true);

const OrderSchema = new mongoose.Schema(
  {
    OrderID: { type: String, required: true, unique: true },
    CustomerID: { type: String },
    Products: { type: Array },
    Status: { type: String },
    SalesChannel: { type: String },
    Address: { type: String },
    Pincode: { type: String },
    TrackingID: { type: Array },
    PaymentID: { type: Array },
    Total: { type: String },
    TaxType : { type: String },
    GST : { type: String },
  },
  { collection: "all-Orders" },
  { timestamps: true }
);

mongoose.models = {};
const Orders = mongoose.model("Orders", OrderSchema);
module.exports = Orders;