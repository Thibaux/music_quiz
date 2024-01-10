import prisma from '../../apps/backend/src/Core/Prisma/Prisma';

async function main() {
    await prisma.user.upsert({
        where: { email: 'alice@musicquiz.com' },
        update: {},
        create: {
            email: 'alice@musicquiz.com',
            first_name: 'Alice',
            last_name: 'Alice',
        },
    });
    await prisma.user.upsert({
        where: { email: 'bob@musicquiz.com' },
        update: {},
        create: {
            email: 'bob@musicquiz.com',
            first_name: 'Bob',
            last_name: '',
        },
    });
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
