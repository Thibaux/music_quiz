import express from 'express';
import { validate } from '../../Validation/Validation';
import { Search, SearchValidation } from '../../Controllers/Playlist/PlaylistController';

const PlaylistsRouter = express.Router();

PlaylistsRouter.get('/search', validate([SearchValidation]), Search);

export default PlaylistsRouter;
