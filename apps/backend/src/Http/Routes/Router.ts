import express from 'express';
import SongRouter from './Song/Song';
import QuizSessionRouter from './QuizSession/QuizSession';
import PlaylistsRouter from './Playlist/PlaylistsRouter';
import QuestionRouter from './Question/Question';

const Router = express.Router();

Router.use('/quiz-sessions', QuizSessionRouter);
Router.use('/songs', SongRouter);
Router.use('/playlists', PlaylistsRouter);
Router.use('/questions', QuestionRouter);

export default Router;
