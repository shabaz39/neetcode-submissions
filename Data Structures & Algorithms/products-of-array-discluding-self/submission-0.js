class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        /**
         * nums is input
         * output is output
         * output[i] = [nums[i+/-... but not i]]
         * each product => fit in 32 bit integer
         * 
         * 
         * [1,2,4,6] output= [48,24,12,8]
         * 
         *   use filter method
         */

         const n = nums.length
         const res = new Array(n).fill(1)

         for (let i=1; i<n; i++) {
            res[i] = res[i-1]*nums[i-1]
         }

         let postfix=1
         for (let i=n-1; i>=0; i--){
            res[i] = res[i]*postfix
            postfix = postfix*nums[i]
         }

         return res
    }
}
