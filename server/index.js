const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')
const  productRouter  = require('./routes/productRoutes')
const userRoute = require('./routes/userRoutes')

const app = express()

dotenv.config()
app.use(express.json({extended:true}))
app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use("/products", productRouter)
app.use("/auth", userRoute)


const CONNECTION_URL = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.exgvi.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`


const PORT = process.env.PORT || 3001

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

