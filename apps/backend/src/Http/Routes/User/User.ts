import express from "express";
import UserPlaylistsRouter from "src/Http/Routes/User/UserPlaylists";

const UserRouter = express.Router();

UserRouter.use(UserPlaylistsRouter)

export default UserRouter;