import express from 'express'
import { AppDataSourse } from './data-source'

AppDataSourse.initialize().then(() => {
    const app = express()

    app.use(express.json())

    app.get('/', (req, res) => {
        return res.json('tudo certo')
    })

    return app.listen(process.env.PORT)
})