import { relations } from 'drizzle-orm';
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { tasksTable } from './task';

export const usersTable = pgTable('users', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    name: varchar({ length: 255 }).notNull(),
    age: integer().notNull(),
    email: varchar({ length: 255 }).unique(),
    image: varchar({ length: 512 }),
    greeting: varchar({ length: 512 }),
});

export const usersRelations = relations(usersTable, ({ many }) => ({
    tasks: many(tasksTable),
}));
