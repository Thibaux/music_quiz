import React from 'react';

export const QuizCard = ({ children }: { children: React.ReactNode }) => {
    return <div className={'lg:w-[60rem] sm:w-[30rem] w-full h-auto bg-slate-100 rounded-2xl p-8'}>{children}</div>;
};
