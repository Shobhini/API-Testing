import { request } from "express"

const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}


export {asyncHandler}



// const asyncHandler = (fn) => async () => {
//     try{
//         await fn(req, res, next)
//     } catch (error){
//         res.status(error.code ||500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }