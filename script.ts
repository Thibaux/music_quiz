import { QuestionsBuilder } from './apps/backend/src/MusicQuiz/Sessions/Questions/QuestionsBuilder';
import QuizSessionService from './apps/backend/src/MusicQuiz/Sessions/QuizSessions/QuizSessionService';

async function main() {
    const session = await QuizSessionService.findSession(15);

    QuestionsBuilder.build(session);
}

main();
// .then(async () => {
//     await prisma.$disconnect();
// })
// .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
// });
