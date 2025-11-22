import 'dotenv/config';
import { insertUsers } from './seeders/user';
import { insertTasks } from './seeders/task';

// seederとして使う
async function main() {
    insertUsers();
    insertTasks();
}

main();
