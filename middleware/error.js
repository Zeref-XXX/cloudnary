export const errorHandler=(err,req,res,next)=>{
    const stCode=res.statusCode===200?500:res.statusCode;

    return res.status(stCode).json({
        success:false,
        error:err.message 
    })
}