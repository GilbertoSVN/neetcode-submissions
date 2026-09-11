class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const map = new Map();

        const p = (s) => s.split('').sort().join('');

        for (let i = 0; i < strs.length; i++) {
            let str = strs[i];
            if (map.has(p(str))) {
                map.set(p(str), map.get(p(str)).concat(str))
            } else {
                map.set(p(str), [str])
            }
        }

        return map.values().toArray();
    }
}
