import { User } from './apps/backend/src/Quiz/Domains/User/User';

async function main() {
    console.log(User.user);
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
