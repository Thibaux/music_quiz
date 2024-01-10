import express from 'express';
import { Show, ShowValidation } from '../../Controllers/Song/SongController';

const SongRouter = express.Router();

SongRouter.get('/:id', ShowValidation, Show);

export default SongRouter;
