class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        if (nums.length === 0) return false;

        const sums = new Set()

        for (const num of nums) {
            if (sums.has(num)) {
                return true
            }
         sums.add(num)

          } 
            return false

    }
}
