import express from "express";
import UserPlaylistsRouter from "./UserPlaylists";

const UserRouter = express.Router();

UserRouter.use(UserPlaylistsRouter)

export default UserRouter;