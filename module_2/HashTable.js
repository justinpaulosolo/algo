class HashTable {
    constructor() {
        this.table = new Array(127);
        this.size = 0;
    };

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        // our tables only holds 127 buckets, so we must return hash between 0 and 127
        return hash % this.table.length;
    };

    set(key, value) {
        const index = this._hash(key);
        this.table[index] = [key, value]
        this.size++;
    };

    get(key) {
        const index = this._hash(key);
        return this.table[index];
    };

}
