class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        const p = (s) => s.split('').sort().join('');
        
        return p(s) === p(t);
    }
}
