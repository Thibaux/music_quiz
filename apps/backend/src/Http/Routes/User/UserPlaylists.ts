import express from "express";
import { Index } from "../../Controllers/User/UserPlaylistsController";

const UserPlaylistsRouter = express.Router();

UserPlaylistsRouter.get('/playlists', Index);

export default UserPlaylistsRouter;
