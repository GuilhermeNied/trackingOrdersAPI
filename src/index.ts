import express from 'express'
import cors from 'cors'

const app = express()
const corsOptions: cors.CorsOptions = {
  origin: '*'
}

const port = process.env.PORT || 3333
app.use(cors(corsOptions))
app.use(express.json())

app.listen(port, () => console.log(`Server is running on port ${port}🚀`))
