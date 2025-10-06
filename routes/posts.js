const express = require('express')
const router = express.Router();

const posts = [
    {
        id : 1,
        content : "post 1"
    },
    {
        id : 2,
        content : 'post 2'
    },
    {
        id : 3,
        content : 'post 3'
    }
]

router.get('/', (req, res)=>{
    const limit = req.query.limit ? parseInt(req.query.limit) : posts.length;
    res.json(posts.slice(0, limit));
})

router.get('/:id', (req, res)=>{
    const id = parseInt(req.params.id);
    res.json(posts.filter(post => (post.id === id)))
})
module.exports = router;