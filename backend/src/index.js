import express from 'express'
import cors from 'cors'
import productsRouter from './routes/productsRoutes.js'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRouter from './routes/authRoutes.js'
import { initialSetup } from './libs/initialSetup.js'

dotenv.config()
const app = express()
initialSetup()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())


app.use("/api/products", productsRouter)
app.use("/api/auth", authRouter)

app.get("/", (req, res)=>{
    res.send('hola mundo')
})


const CONNECTION_URL = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.exgvi.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`


const PORT = process.env.PORT || 3001

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
  .catch((error) => console.log(`${error} did not connect`));

