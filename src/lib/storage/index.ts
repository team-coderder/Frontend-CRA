class Storage {
    public getEntry(key: string): unknown {
        const entry = localStorage.getItem(key);
        if (entry) {
            return JSON.parse(entry);
        } else {
            return null;
        }
    }

    public setEntry(key: string, value: any): void {
        localStorage.setItem(key, JSON.stringify(value));
    }

    public removeEntry(key: string): void {
        localStorage.removeItem(key);
    }
}

export default new Storage();
