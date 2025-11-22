import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';
import * as userSchema from './schema/user';
import * as taskSchema from './schema/task';

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});
export const primaryDb = drizzle({
    client: pool,
    schema: { ...userSchema, ...taskSchema },
});
