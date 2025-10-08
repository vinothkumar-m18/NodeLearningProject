import path from 'path'
import express from 'express'
import posts from './routes/posts.js'
import logger from './middleware/logger.js'
import errorHandler from'./middleware/error.js'
import notFound from './middleware/notFound.js'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
console.log(__filename);
console.log(__dirname);
const port = process.env.PORT || 8000
const app = express()
app.use(express.json())
app.use(logger);
app.use(express.static(path.join(__dirname, 'public')));
app.use('/api/posts', posts)
app.use(notFound);
app.use(errorHandler);
app.listen(port, ()=>{
    console.log(`server is running at port ${port}`);    
})
