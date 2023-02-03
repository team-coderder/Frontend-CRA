import { AxiosError } from 'axios';

export function handleError(error: unknown) {
    if (error instanceof AxiosError && error.response?.data?.localizedMessage) {
        alert(error.response?.data?.localizedMessage);
    } else {
        console.log(error);
    }
}
