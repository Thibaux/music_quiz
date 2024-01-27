export const Builder = {
    quiz: null as any,

    init: (quiz: any) => {
        Builder.quiz = quiz;

        return Builder;
    },

    build: () => {
        console.log(Builder);
    },
};
