class Solution {
    delimiter = '@'

    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encoded = '';
        for (let word of strs) {
            encoded += word.length + this.delimiter + word
        }

        return encoded;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const words = []
        let size = '';
        let i = 0;

        while (i < str.length) {
            while (str[i] !== this.delimiter) {
                size += str[i];
                i++;
            }
            words.push(str.slice(i + 1, Number(size) + i + 1))
            i += Number(size) + 1;
            size = '';
        }

        return words;
    }
}
