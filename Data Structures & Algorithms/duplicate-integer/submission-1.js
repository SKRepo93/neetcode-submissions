class Solution {
    constructor(nums){
        this.num = nums;
    }

    hasDuplicate(num) {
        const numarra = new Set(num);

        if (numarra.size !== num.length) {
            return true;
        } else {
            return false;
        }
    }
}

const nums = [1,2,3,4];
const dup = new Solution(nums);
console.log(dup.hasDuplicate(nums));