import prisma from '../../apps/backend/src/Core/Prisma/Prisma';
import { UserSeeder } from './users/UserSeeder';

async function main() {
    await UserSeeder();
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
