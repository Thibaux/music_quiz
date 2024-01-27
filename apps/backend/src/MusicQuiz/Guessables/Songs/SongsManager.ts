import { Builder } from './Builder/Builder';
import { Handler } from './Handler/Handler';
import { GuessableTypes } from '../GuessableTypes';

export const SongsManager = {
    type: () => GuessableTypes.SONGS,
    Builder: Builder,
    Handler: Handler,
};
