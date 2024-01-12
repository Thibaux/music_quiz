import { faker } from '@faker-js/faker';
import prisma from '../../../apps/backend/src/Core/Prisma/Prisma';

export const UserSeeder = async () => {
    let users = [];

    for (let i = 0; i < 9; i++) {
        users.push({
            email: faker.internet.email(),
            first_name: faker.person.firstName(),
            last_name: faker.person.lastName(),
        });
    }

    await prisma.users.createMany({
        data: [...users],
    });
};
