
let posts = [
    {
        id: 1,
        content: "post 1"
    },
    {
        id: 2,
        content: 'post 2'
    },
    {
        id: 3,
        content: 'post 3'
    }
]
export const getAllPosts = (req, res) => {   
        res.json(posts);
}
export const getSinglePost = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => (post.id === id))
    if (!post) {
        const error = new Error(`a post with the id ${id} was not found`);
        return next(error);
    }
    res.status(201).json(post)
}
export const createPost = (req, res) => {
    const newPost = {
        id: posts.length + 1,
        content: req.body.content
    }
    posts.push(newPost);
    res.status(201).json(posts);
}
export const editPost = (req, res) => {
    const id = parseInt(req.params.id);
    const post = posts.find(post => post.id === id)
    post.content = req.body.content;
    res.status(200).json(posts);
}
export const deletePost = (req, res) => {
    const id = parseInt(req.params.id);
    posts = posts.filter(post => (post.id != id));
    res.status(200).json(posts);
}
