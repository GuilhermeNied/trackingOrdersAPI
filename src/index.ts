import express from 'express'
import cors from 'cors'
import { router } from './routes'

const app = express()
const corsOptions: cors.CorsOptions = {
  origin: '*'
}

const port = process.env.PORT || 3333
app.use(cors(corsOptions))
app.use(express.json())
app.use(router)
app.listen(port, () => console.log(`Server is running on port ${port}🚀`))
