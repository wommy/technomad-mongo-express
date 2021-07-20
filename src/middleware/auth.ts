import { RequestHandler } from "express"

export const auth:RequestHandler = (req,res,next)=> req.isAuthenticated() ? next() : res.redirect('/')
export const guest:RequestHandler = (req,res,next)=> !req.isAuthenticated() ? next() : res.redirect('/dashboard')
// export default {
// 	Auth: (req:Request,res:Response,next:NextFunction)=> req.isAuthenticated() ? next() : res.redirect('/'),
// 	Guest: (req:Request,res:Response,next:NextFunction)=> req.isAuthenticated() ? res.redirect('/dashboard') : next() 
// }
