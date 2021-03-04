import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'

import postRouts from './routes/posts.js'
import userRouter from './routes/users.js'

const app = express()

app.use(bodyParser.json({ limit: '30mb', extended: true}))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true}))

app.use(cors())
app.use('/posts', postRouts)
app.use('/user', userRouter)

const CONNECTION_URL = 'mongodb+srv://dmytroDBuser:dmytro1128@cluster0.gyvhn.mongodb.net/<dbname>?retryWrites=true&w=majority'
//mongodb+srv://<username>:<password>@cluster0.gyvhn.mongodb.net/<dbname>?retryWrites=true&w=majority
// const CONNECTION_URL = 'mongodb+srv://js_mastery:123123123@practice.jto9p.mongodb.net/test';
const PORT = process.env.PORT || 5000

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message))

mongoose.set('useFindAndModify', false)