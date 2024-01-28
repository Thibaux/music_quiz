export const Handler = {
    quiz: null as any,

    init: (quiz: any) => {
        Handler.quiz = quiz;

        return Handler;
    },

    handle: () => {
        // redis get random record of session_id list

        return {
            id: '',
            title: '',
            artist: '',
            image: '',
            is_correct: false,
        };
    },
};
