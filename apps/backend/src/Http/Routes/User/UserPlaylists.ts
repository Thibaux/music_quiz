import express from "express";
import { Index } from "src/Http/Controllers/User/UserPlaylists";

const UserPlaylistsRouter = express.Router();

UserPlaylistsRouter.get('/playlists', Index);

export default UserPlaylistsRouter;
