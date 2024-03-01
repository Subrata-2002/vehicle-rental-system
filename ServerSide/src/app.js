
const express = require("express")
const app = express();
const cors = require("cors")
require("./db/connection")

const dotenv = require("dotenv");
dotenv.config();

const CarRouter = require("./router/CarRouts")
const UserRouter = require("./router/UserRouts")
const AdminRouter = require("./router/AdminRouter")
const OrderRouter = require("./router/OrderRouter")

const PORT = process.env.PORT || 5000;

app.use(express.json())
app.use(cors());
app.use(cors());
app.use(express.urlencoded({extended:true}))

app.use('/cars', CarRouter)
app.use('/user', UserRouter)
app.use('/admin', AdminRouter)
app.use('/orders', OrderRouter)


app.listen(PORT, ()=>{
    console.log("listening port 5000...")
})
