class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const map = new Map();

        for (let i in nums) {
            if (!map.has(nums[i])) {
                map.set(nums[i], 0);
            }

            map.set(nums[i], map.get(nums[i]) + 1);
        }

        return Array.from(map.entries()).sort((a, b) => b[1] - a[1]).slice(0, k).map(([k, _]) => k);
    }
}
