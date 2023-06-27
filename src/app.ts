import { env } from './env.config'

import express from 'express'
import cors from 'cors'
import morgan from 'morgan'

import { router } from './routes'
// express config
const app = express()
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))

// call routes
app.use(router)
// enable listener
app.listen(env.PORT, () => { console.log(`listenning on port ${env.PORT}`) })
