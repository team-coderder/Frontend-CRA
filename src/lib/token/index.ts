class AccessToken {
    public getAccessToken(key: string): string | null {
        return localStorage.getItem(key);
    }

    public setAccessToken(key: string, token: string): void {
        localStorage.setItem(key, token);
    }

    public removeAccessToken(key: string): void {
        localStorage.removeItem(key);
    }
}

export default new AccessToken();
