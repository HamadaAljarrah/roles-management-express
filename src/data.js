const ROLES = {
    owner: "owner",
    admin: "admin",
    member: "member"
}
const USERS = [
    {name: "Hamada", userId: "0", role: ROLES.owner},
    {name: "Taquang", userId: "1", role: ROLES.admin},
    {name: "Stina", userId: "2", role: ROLES.member},

]
let POSTS = [
    {name: "Hamada", postId: "1", userId: "0"},
    {name: "Taquang", postId: "2", userId: "1"},
    {name: "Stina", postId: "0", userId: "2"},
    {name: "Hamada", postId: "3", userId: "0"},
    {name: "Taquang", postId: "4", userId: "1"},
    {name: "Stina", postId: "5", userId: "2"},
]
export {ROLES, USERS, POSTS}