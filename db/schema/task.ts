import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { usersTable } from './user';
import { relations } from 'drizzle-orm';

export const tasksTable = pgTable('tasks', {
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    title: varchar({ length: 255 }).notNull(),
    description: varchar({ length: 1024 }),
    userId: integer('user_id')
        .notNull()
        .references(() => usersTable.id),
});

export const tasksRelations = relations(tasksTable, ({ one }) => ({
    user: one(usersTable, {
        fields: [tasksTable.userId],
        references: [usersTable.id],
        relationName: 'user',
    }),
}));
