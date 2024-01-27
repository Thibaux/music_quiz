import { SongsManager } from './Songs/SongsManager';
import { GuessableTypes } from './GuessableTypes';

type GuessableBaseManager = {
    Builder: any;
};

export const GuessableServices = {
    get: (type: string) => GuessableServices.all()[type],

    all: () => {
        return {
            [GuessableTypes.SONGS]: SongsManager,
        };
    },
};
