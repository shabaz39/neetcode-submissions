class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        
        //if value appears more than once - true
        //if value appears not more than once - false
        // uniqueness matters - hence hashmap or hashset - but for uniqueness - *hashset*

        let array = nums

        let hashSet = new Set()

        for (let num of array) {
            if (hashSet.has(num)) {
                return true
            }
                        hashSet.add(num);

        }
        return false;

    }
}
