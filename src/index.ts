import express from 'express'
import { AppDataSourse } from './data-source'
import routes from './routes'

AppDataSourse.initialize().then(() => {
    const app = express()

    app.use(express.json())

    app.use(routes)

    return app.listen(process.env.PORT)
})