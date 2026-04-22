class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let numLength = new Set(nums);
        if(numLength.size === nums.length){
            return false;
        } else {
            return true;
        }
    }
}
