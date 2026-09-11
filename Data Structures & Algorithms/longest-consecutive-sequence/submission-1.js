class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const elements = new Set(nums);
        let consecutives = 0;
        let current;

        for (const num of elements) {
            current = num;
            if (elements.has(current - 1)) {
                continue;
            }
            let length = 1;
            while (elements.has(current + 1)) {
                length++;
                current++;
            }

            if (length > consecutives) {
                consecutives = length;
            }            
        }

        return consecutives;
    }
}
