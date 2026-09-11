class DynamicArray {
    storage;
    size = 0;
    capacity = 0;

    /**
     * @constructor
     * @param {number} capacity
     */
    constructor(capacity) {
        this.storage = new Array(capacity);
        this.capacity = capacity;
    }

    /**
     * @param {number} i
     * @returns {number}
     */
    get(i) {
        return this.storage[i];
    }

    /**
     * @param {number} i
     * @param {number} n
     * @returns {void}
     */
    set(i, n) {
        this.storage[i] = n;
    }

    /**
     * @param {number} n
     * @returns {void}
     */
    pushback(n) {
        if (this.size === this.capacity) {
            this.resize();
        }

        this.set(this.size, n)
        this.size += 1;
    }

    /**
     * @returns {number}
     */
    popback() {
        const val = this.storage[this.size - 1];
        this.size -= 1;
        return val;
    }

    /**
     * @returns {void}
     */
    resize() {
        this.capacity *= 2;
        const newArr = new Array(this.capacity);
        for (let i = 0; i < this.size; i++) {
            newArr[i] = this.get(i);
        }

        this.storage = newArr;
    }

    /**
     * @returns {number}
     */
    getSize() {
        return this.size;
    }

    /**
     * @returns {number}
     */
    getCapacity() {
        return this.capacity;
    }
}
