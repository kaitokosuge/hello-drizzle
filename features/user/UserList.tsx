import { Task } from '@/models/task';
import { User } from '@/models/user';
import { FetchResponse } from '@/types/FecthResponse';
import React from 'react';

export default async function UserList() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/api/user`, {
        cache: 'no-store',
    });
    const users: FetchResponse<(User & { tasks: Task[] | [] })[]> =
        await res.json();

    if (users.status === 500) {
        return (
            <div>
                ユーザーの取得に失敗しました。時間をおいて再度訪問してください。
            </div>
        );
    }
    if (!users.data) {
        return <div>ユーザーが存在しません。</div>;
    }
    return (
        <div>
            {users.data.map((user) => (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <div>
                        {user.tasks.length === 0 && (
                            <div>・タスクはありません。</div>
                        )}
                        {user.tasks.map((task) => (
                            <div key={task.id}>・{task.title}</div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
