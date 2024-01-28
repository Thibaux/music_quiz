export const Builder = {
    quiz: null as any,

    init: (quiz: any) => {
        Builder.quiz = quiz;

        return Builder;
    },

    build: () => {
        console.log(Builder.quiz.config.playlist_id);

        /*
    populate redis with =
     session_id:
[
{
id: '',
title: '',
artist: '',
image: '',
is_correct: false,
},
{
id: '',
title: '',
artist: '',
image: '',
is_correct: false,
},
]
     */
    },
};
