import express from 'express';
import { Index, Show, ShowValidation } from '../../Controllers/Song/SongController';

const SongRouter = express.Router();

SongRouter.get('', Index);
SongRouter.get('/:id', ShowValidation, Show);

export default SongRouter;
