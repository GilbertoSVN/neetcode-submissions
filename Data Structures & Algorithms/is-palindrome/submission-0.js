class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const parsed = s.replace(/[^a-zA-Z0-9]/g, '');
        for (let i = 0, j = parsed.length - 1; i<j; i++, j--) {
            if(!(parsed[i].toLowerCase() === parsed[j].toLowerCase())) return false;
        }

        return true;
    }
}
