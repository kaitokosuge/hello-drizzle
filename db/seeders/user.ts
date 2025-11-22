import { primaryDb } from '../dbConnection';
import { usersTable } from '../schema/user';

export const insertUsers = async () => {
    const user: typeof usersTable.$inferInsert = {
        name: 'kaitokosuge',
        age: 24,
        email: 'kaito@example.com',
        image: 'image.png',
    };
    await primaryDb.insert(usersTable).values(user);
    console.log('New user created!');
};
