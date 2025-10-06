const path = require('path')
const express = require('express')
const app = express();
const posts = require('./routes/posts')
const port = process.env.PORT || 8000
app.use('/api/posts', posts)
app.listen(port, ()=>{
    console.log(`server is running at port ${port}`);    
})
