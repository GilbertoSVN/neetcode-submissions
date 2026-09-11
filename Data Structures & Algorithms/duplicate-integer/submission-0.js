class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueArr = new Set(nums);
        console.log(uniqueArr);

        return uniqueArr.size !== nums.length;
    }
}
