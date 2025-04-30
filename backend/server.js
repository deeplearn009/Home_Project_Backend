import express from 'express'
import cors from 'cors'
import router from './routes/router.js'
import connectDB from './configs/config.js'

const app = express()


app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors('*'))

app.use('/', router)

connectDB()

app.listen(5000, () => (
    console.log('connected')
))