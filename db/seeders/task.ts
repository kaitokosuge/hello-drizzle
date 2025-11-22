import { primaryDb } from '../dbConnection';
import { tasksTable } from '../schema/task';

export const insertTasks = async () => {
    const task: typeof tasksTable.$inferInsert = {
        title: 'Sample Task2',
        description: 'This is a sample task2 description.',
        userId: 1,
    };
    await primaryDb.insert(tasksTable).values(task);
    console.log('New task created!');
};
