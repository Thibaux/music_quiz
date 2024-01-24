import { randomNum } from '../../Helpers/Helpers';

export const OptionsService = {
    generateOptions: (quiz: any) => {
        const nOfOptions = quiz.config.number_of_options;
        let options = [];

        for (let i = 0; i < nOfOptions; i++) {
            options.push(generateOption(quiz));
        }

        return assignCorrectAnswer(options, nOfOptions);
    },
};

const generateOption = (quiz: any) => {
    // fetch track from redis
    // redis should be filled with tracks after creating the quiz
    // correct_answers

    return {
        id: '',
        title: '',
        artist: '',
        image: '',
        is_correct: false,
    };
};

const assignCorrectAnswer = (options: any[], nOfOptions: number): any[] => {
    const correctAnswers = [];

    const correctAnswerNumber = randomNum(nOfOptions);
    const answer = options[correctAnswerNumber];

    // check if answer is already a correct answer
    // if so, we assign another answer as correct answer
    if (!correctAnswers.includes(answer.id)) {
        answer.is_correct = true;
    } else {
        assignCorrectAnswer(options, nOfOptions);
    }

    // reassign correct answer
    options[correctAnswerNumber] = answer;

    return options;
};
