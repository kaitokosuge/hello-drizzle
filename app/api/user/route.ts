import { NextResponse } from 'next/server';

import { primaryDb } from '@/db/dbConnection';
import { Task } from '@/models/task';
import { User } from '@/models/user';

export async function GET() {
    try {
        const users: (User & { tasks: Task[] | [] })[] =
            await primaryDb.query.usersTable.findMany({
                with: {
                    tasks: true,
                },
            });
        return NextResponse.json({
            data: users,
            status: 200,
        });
    } catch (error) {
        if (error instanceof Error) {
            console.log('Error:ユーザー取得に失敗', error.message);
            return NextResponse.json({
                data: null,
                status: 500,
            });
        }
        console.error('Some Error:ユーザー取得に失敗', error);
        return NextResponse.json({
            data: null,
            status: 500,
        });
    }
}
