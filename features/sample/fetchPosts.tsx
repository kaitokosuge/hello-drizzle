import axios, { AxiosError } from 'axios';

export type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
};

export async function fetchHello() {
    try {
        const { data } = await axios.get<Post>(
            'https://jsonplaceholder.typicode.com/posts/1',
        );

        return { data, error: null };
    } catch (error: unknown) {
        if (error instanceof AxiosError) {
            console.error('axiosエラーをキャッチしました', error);
            return { data: null, error: error.status };
        }
        console.error('予測しないエラーをキャッチしました', error);

        return { data: null, error: 500 };
    }
}
