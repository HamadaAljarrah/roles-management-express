import { POSTS, USERS } from "../data.js"
import {
    canSeePost,
    canSeePosts,
    canDeletePost,
    canChangeRole } from "../permissions/permissions.js";

export const renderHome = (req, res) =>{
    res.json("Welcome!");
}

export const renderDashboard = (req, res) =>{
    res.json("Dashboard for user: "+ req.user.name);
}

export const renderPosts = (req, res) =>{
    if(!canSeePosts(req.user, req.posts))
        return res.json("No Post to Show")
    res.json(canSeePosts(req.user, req.posts))
}


export const renderPost= (req, res) =>{
    const postId = req.params.postId;
    req.post = POSTS.find(post => post.postId == postId);
    if(req.post == null)
        return res.json("Post was not found")
    if(!canSeePost(req.user, req.post))
        return res.json("Not Allowed")
    res.json(req.post);
}
export const deletePost= (req, res) =>{
    const postId = req.params.postId;
    const post = POSTS.find(post => post.postId === postId)
    if(post == null)
        return res.json("Post was not found")
    if(!canDeletePost(req.user, post))
        return res.json("Not Allowed")
    let index;
    POSTS.forEach((post, i) => 
        post.postId === postId? index = i: index = NaN)
    POSTS.splice(index, 1)
    //console.log(POSTS);
    res.json("Post deleted");
}

export const changeUserRole= (req, res) =>{
    const userId = req.params.userId;
    let theUser;
    USERS.map(user=>{
        if(user.userId === userId)
            user.role = req.body.role
            theUser = user
    })
    //console.log(USERS);
    if(!canChangeRole(req.user, USERS))
        return res.json("Not Allowed")
    res.json("Changed User Role " + theUser.name)
}

export const authUser = (req, res) =>{
    const user = USERS.find(user => user.userId === req.body.id);
    if (user == null) 
        return res.json("User doesn't exist")
    req.user = user
    res.json("user " + user.name + " is loged in")
}




