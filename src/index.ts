import express, { application } from 'express';
import 'express-async-errors'
import { AppDataSource } from './data-source';
import routes from '../routes';



AppDataSource.initialize().then(() => {
    const app = express()

    app.use(express.json())
    
    app.use(routes)





    return app.listen(process.env.PORT)
}).catch((err) => {
    console.error("Erro na inicialização do Data Source");

})