export const canSeePosts = (user, posts)=>{
    if(posts == null) return null;
    if(user.role === ROLES.owner ||
        user.role === ROLES.admin) return posts
    const res = posts.filter(post => post.userId === user.userId)
    return res
}

export const canSeePost = (user, post) =>{
    if(user.role === ROLES.owner ||
        user.role === ROLES.admin) return post;
    if (post.userId !== user.userId) return null;
    return post;
}

export const canDeletePost = (user, post)=>{
    if(user.role === ROLES.owner ||
        user.role === ROLES.admin)
            return post;
    if (post.userId !== user.userId)
        return null;
    return post;
}


export const canChangeRole = (user, users)=>{
    if(user.role === ROLES.owner)
        return users;
    return null;
}
