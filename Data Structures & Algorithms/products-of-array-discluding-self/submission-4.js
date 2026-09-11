class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        const result = [];
        const prefix = new Array(nums.length).fill(1);
        const suffix = [];
        for (let i = 0; i < nums.length; i++) {
            prefix[i] = (prefix[i - 1] ?? 1) * (nums[i - 1] ?? 1);
            suffix[nums.length - i - 1] = (suffix[nums.length - i] ?? 1) * (nums[nums.length - i] ?? 1);
        }

        for (let i = 0; i < nums.length; i++) {
            result.push(prefix[i] * suffix[i]);
        }
        
        return result;
    }
}
