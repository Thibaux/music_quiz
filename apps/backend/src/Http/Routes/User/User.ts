import express from "express";
import { SetDetails } from "src/Http/Controllers/User/User";
import UserPlaylistsRouter from "src/Http/Routes/User/UserPlaylists";

const UserRouter = express.Router();

UserRouter.post('/', SetDetails);

UserRouter.use(UserPlaylistsRouter)

export default UserRouter;