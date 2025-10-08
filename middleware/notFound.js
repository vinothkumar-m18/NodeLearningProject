const notFound = (req, res, next)=>{
    const error = new Error("not found");
    res.status(404).json({msg:error.message});
    return next(error);
}
export default notFound;