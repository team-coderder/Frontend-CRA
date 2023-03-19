import { AxiosError } from 'axios';

export async function handleError(
    error: unknown,
    alert?: (title: string, description?: string) => Promise<boolean>,
) {
    if (
        error instanceof AxiosError &&
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500 &&
        error.response.data.message
    ) {
        await alert?.(error.response?.data?.message);
    } else if (error instanceof Error && error.message) {
        const [title, desc] = error.message.split('||');
        await alert?.(title, desc || '');
    } else {
        console.log(error);
    }
}
