class Storage {
    constructor(storageLocation) {
        this._storage = storageLocation;
    }

    getItem(item) {
        const result = JSON.parse(this._storage.getItem(item));
        return result;
    }

    setItem(key, value) {
        this._storage.setItem(key, JSON.stringify(value));
    }
};

const storage = new Storage(localStorage);

export default storage;