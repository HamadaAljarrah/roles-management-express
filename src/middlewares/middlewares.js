import { POSTS, USERS } from "../data.js";


export const setUser = (req, res, next) =>{
    const userId = req.body.userId;
    if(userId)
        req.user = USERS.find(user=> user.userId === userId)
    next();
}

export const setPosts = (req, res, next)=>{
    req.posts = POSTS
    return next();
}

export const checkIfAuth = (req, res ,next) =>{
    if(req.user == null)
        return res.json("login to see this page");
    next()
}



