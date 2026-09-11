class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const parsed = s.replace(/[^a-zA-Z0-9]/g, '').replace(/[A-Z]/g, (c) => {
            return c.toLowerCase();
        });

        return parsed === parsed.split('').reverse().join('')
    }
}
