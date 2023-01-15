class Storage {
    public getEntry(key: string): string | null {
        return localStorage.getItem(key);
    }

    public setEntry(key: string, value: string): void {
        localStorage.setItem(key, value);
    }

    public removeEntry(key: string): void {
        localStorage.removeItem(key);
    }
}

export default new Storage();
