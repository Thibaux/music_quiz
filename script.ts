import prisma from './apps/backend/src/Core/Prisma/Prisma';

async function main() {
    const allUsers = await prisma.user.findMany();

    console.log(allUsers);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
