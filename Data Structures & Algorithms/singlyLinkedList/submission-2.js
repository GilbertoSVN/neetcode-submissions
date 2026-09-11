class LinkedList {
    list = [];

    constructor() {
        return this;
    }

    /**
     * @param {number} index
     * @return {number}
     */
    get(index) {
        if (index >= this.list.length) return -1;
        return this.list[index];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertHead(val) {
        this.list.unshift(val);
    }

    /**
     * @param {number} val
     * @return {void}
     */
    insertTail(val) {
        this.list.push(val);
    }

    /**
     * @param {number} index
     * @return {boolean}
     */
    remove(index) {
        if (index >= this.list.length) return false;
        this.list = [...this.list].slice(0, index).concat([...this.list].slice(index + 1))
        return true;
    }

    /**
     * @return {number[]}
     */
    getValues() {
        return this.list;
    }
}
