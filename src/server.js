import express from "express";
import {routes} from "./routes/routers.js";
import { setUser, setPosts } from "./middlewares/middlewares.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(setUser);
app.use("/posts", setPosts);



app.use("/", routes);



const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log("listning to port *"+port)});

