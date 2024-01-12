import express from 'express';
import { Index, Show, ShowValidation } from '../../Controllers/Song/SongController';
import { validate } from '../../Validation/Validation';

const SongRouter = express.Router();

SongRouter.get('', Index);
SongRouter.get('/:id', validate([ShowValidation]), Show);

export default SongRouter;
