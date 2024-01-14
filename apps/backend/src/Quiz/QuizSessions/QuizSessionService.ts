import { randomBytes } from 'crypto';

const QuizSessionService = {
    hashGenerator: () => {
        return randomBytes(32).toString('base64').slice(0, 5).toUpperCase();
    },
};

export default QuizSessionService;
