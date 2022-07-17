import express from "express";
const routes = express.Router()
import * as controllers from "../controllers/controllers.js"
import {checkIfAuth} from "../middlewares/middlewares.js"


routes.get("/", controllers.renderHome)
routes.get("/dashboard", checkIfAuth, controllers.renderDashboard)
routes.get("/posts", checkIfAuth, controllers.renderPosts)
routes.get("/posts/:postId", checkIfAuth, controllers.renderPost)
routes.delete("/posts/:postId", checkIfAuth, controllers.deletePost)
routes.put("/changeRole/:userId", checkIfAuth, controllers.changeUserRole)
routes.post("/login", controllers.authUser)

export {routes}