const asyncHandler=(requestHandler)=>{
    return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next)).catch((err)=>next(err))
    }
}

export {asyncHandler}


//utils configuartion mainly done making an async hgandler
//which can be used as a wrapper to warp  try catch code 
//we do this because of every time we use everytime try catch to easy the task we do this









// const asyncHandler=(fn)=>async(req,res,next)=>{   //higher order function

//     try
//     { 
//      await fn(req,res,next)
//     }
//     catch(error){
//   res.status(error.code||500).json({
//     success:false,
//     message:error.message
//   })
//     }
// }



