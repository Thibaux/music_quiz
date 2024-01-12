import { Songs } from './apps/backend/src/Quiz/Domains/Songs/Songs';

async function main() {
    console.log(new Songs().build());
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
