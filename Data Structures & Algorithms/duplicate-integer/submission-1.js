class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueArr = new Set(nums);
        return uniqueArr.size !== nums.length;
    }
}
