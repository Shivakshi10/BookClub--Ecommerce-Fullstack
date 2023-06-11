const express = require ("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const UserRoute = require("./routes/user");
const AuthRoute = require("./routes/auth");
const ProductRoute = require("./routes/product");
const CartRoute = require("./routes/cart");
const OrderRoute = require("./routes/order");
const stripeRoute = require("./routes/stripe");
const cors = require("cors");

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}

app.use(allowCrossDomain);


dotenv.config();

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DBConnected Succesfully!"));

app.use(cors());

app.use(express.json());
app.use("/api/users",UserRoute);
app.use("/api/auth",AuthRoute);
app.use("/api/products",ProductRoute);
app.use("/api/orders",OrderRoute);
app.use("/api/carts",CartRoute);
app.use("/api/stripe",stripeRoute);

  

app.listen(process.env.PORT || 5000,()=>{
    console.log("Backend running on port 5000");
})