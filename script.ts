import { randomNum } from './apps/backend/src/MusicQuiz/Helpers/Helpers';

async function main() {
    console.log(randomNum());
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
