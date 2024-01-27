import { GuessableServices } from '../../Guessables/GuessableServices';

export const QuestionsBuilder = {
    build: (session: any) => {
        const service = GuessableServices.get(session.config.guessable_type);

        service.Builder.init(session).build();
    },
};
