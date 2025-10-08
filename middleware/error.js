const errorHandler = (err, req, res, next)=>{
    console.error(err.stack)
    res.status(201).json({msg:"error"})
}
export default errorHandler;