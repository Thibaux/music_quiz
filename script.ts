import { CurrentUser } from './apps/backend/src/Quiz/Domains/User/CurrentUser';

async function main() {
    console.log(CurrentUser.user);
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
