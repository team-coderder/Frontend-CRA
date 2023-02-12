import { AxiosError } from 'axios';

export function handleError(error: unknown) {
    if (error instanceof AxiosError && error.response?.data?.message) {
        alert(error.response?.data?.message);
    } else {
        console.log(error);
    }
}
