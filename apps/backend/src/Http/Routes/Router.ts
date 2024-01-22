import express from 'express';
import SongRouter from './Song/Song';
import QuizSessionRouter from './QuizSession/QuizSession';
import PlaylistsRouter from './Playlist/PlaylistsRouter';

const Router = express.Router();

Router.use('/quiz-session', QuizSessionRouter);
Router.use('/songs', SongRouter);
Router.use('/playlists', PlaylistsRouter);

export default Router;
